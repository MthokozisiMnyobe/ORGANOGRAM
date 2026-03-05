// app.js - COMPLETELY RESTRUCTURED with hierarchical CSS classes
// 3 tabs only: EXECUTIVE, DIRECTOR DELIVERY, DIRECTOR PLANNING

(function() {
    // Current active filters
    let currentFilters = {
        department: 'all',
        status: 'all',
        psu: 'all'
    };
    
    // Current active view
    let currentView = 'executive';

    const views = {
        // ==================== EXECUTIVE LEADERSHIP - Mr Mduba ====================
        executive: `
            <div class="org-section" data-department="executive">
                <h2 style="color:#1d4164; margin-bottom:1.5rem;">🏢 EXECUTIVE LEADERSHIP · Mr Mduba</h2>
                
                <div class="hierarchy-container">
                    <!-- CHIEF DIRECTOR - TOP LEVEL -->
                    <div class="hierarchy-top">
                        <div class="card chief" data-psu="false" data-status="filled" data-department="executive" data-filled="1" data-vacant="0" data-psu-count="0" style="min-width:280px;">
                            <div class="title" style="font-size:1.3rem;">CHIEF DIRECTOR: PRM</div>
                            <div style="font-size:1.2rem; font-weight:600; margin:0.5rem 0;">Mr. Mduba</div>
                            <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                        </div>
                    </div>
                    
                    <!-- CONNECTOR LINE -->
                    <div class="top-connector"></div>
                    
                    <!-- DIRECT REPORTS TO CHIEF DIRECTOR (all PSU) - MULTIPLE GROUPS -->
                    <div class="multi-report-section">
                        <div class="section-title">⬇️ DIRECT REPORTS TO MR MDUBA (all PSU) ⬇️</div>
                        <div class="hierarchy-middle">
                            
                            <!-- Group 1: Manager Infrastructure Grant -->
                            <div class="direct-report-group">
                                <div class="card manager" data-psu="true" data-status="filled" data-department="executive" data-filled="0" data-vacant="0" data-psu-count="1" style="min-width:220px; border-left-color:#6d3b8b;">
                                    <div class="title">Manager: Infrastructure Grant</div>
                                    <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                </div>
                                <!-- No team under this one -->
                            </div>
                            
                            <!-- Group 2: Senior Programme Administrator -->
                            <div class="direct-report-group">
                                <div class="card manager" data-psu="true" data-status="filled" data-department="executive" data-filled="0" data-vacant="0" data-psu-count="1" style="min-width:220px; border-left-color:#6d3b8b;">
                                    <div class="title">Senior Programme Administrator</div>
                                    <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                </div>
                            </div>
                            
                            <!-- Group 3: Communications Specialist -->
                            <div class="direct-report-group">
                                <div class="card specialist" data-psu="true" data-status="filled" data-department="executive" data-filled="0" data-vacant="0" data-psu-count="1" style="min-width:220px; border-left-color:#6d3b8b;">
                                    <div class="title">Communications Specialist</div>
                                    <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                </div>
                            </div>
                            
                            <!-- Group 4: Audit & Compliance Lead -->
                            <div class="direct-report-group">
                                <div class="card specialist" data-psu="true" data-status="filled" data-department="executive" data-filled="0" data-vacant="0" data-psu-count="1" style="min-width:220px; border-left-color:#6d3b8b;">
                                    <div class="title">Audit & Compliance Lead</div>
                                    <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                </div>
                            </div>
                            
                            <!-- Group 5: Immovable Assets Lead -->
                            <div class="direct-report-group">
                                <div class="card specialist" data-psu="true" data-status="filled" data-department="executive" data-filled="0" data-vacant="0" data-psu-count="1" style="min-width:220px; border-left-color:#6d3b8b;">
                                    <div class="title">Immovable Assets Lead</div>
                                    <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                </div>
                            </div>
                            
                            <!-- Group 6: WIP Assets Lead -->
                            <div class="direct-report-group">
                                <div class="card specialist" data-psu="true" data-status="filled" data-department="executive" data-filled="0" data-vacant="0" data-psu-count="1" style="min-width:220px; border-left-color:#6d3b8b;">
                                    <div class="title">WIP Assets Lead</div>
                                    <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                </div>
                            </div>
                            
                            <!-- Group 7: RFU Assets Lead -->
                            <div class="direct-report-group">
                                <div class="card specialist" data-psu="true" data-status="filled" data-department="executive" data-filled="0" data-vacant="0" data-psu-count="1" style="min-width:220px; border-left-color:#6d3b8b;">
                                    <div class="title">RFU Assets Lead</div>
                                    <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                </div>
                            </div>
                            
                            <!-- Group 8: Fair Value Assets Lead -->
                            <div class="direct-report-group">
                                <div class="card specialist" data-psu="true" data-status="filled" data-department="executive" data-filled="0" data-vacant="0" data-psu-count="1" style="min-width:220px; border-left-color:#6d3b8b;">
                                    <div class="title">Fair Value Assets Lead</div>
                                    <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                </div>
                            </div>
                            
                            <!-- Group 9: Accounting Clerks (has team of 4) -->
                            <div class="direct-report-group">
                                <div class="card admin" data-psu="true" data-status="filled" data-department="executive" data-filled="0" data-vacant="0" data-psu-count="4" style="min-width:220px; border-left-color:#6d3b8b;">
                                    <div class="title">Accounting Clerks (Immovable Assets)</div>
                                    <div class="counts"><span class="psu-badge">PSU 4</span></div>
                                </div>
                                <!-- This card represents 4 people, no individual cards needed -->
                            </div>
                            
                            <!-- Group 10: Specialist Programme Manager -->
                            <div class="direct-report-group">
                                <div class="card manager" data-psu="true" data-status="filled" data-department="executive" data-filled="0" data-vacant="0" data-psu-count="1" style="min-width:220px; border-left-color:#6d3b8b;">
                                    <div class="title">Specialist Programme Manager Rationalisation</div>
                                    <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- SYSTEMS MANAGER WITH TEAM - separate hierarchy -->
                    <div class="multi-report-section" style="margin-top:2rem;">
                        <div class="section-title">💻 SYSTEMS MANAGER & TEAM</div>
                        
                        <!-- Systems Manager (reports to Mduba) -->
                        <div style="display:flex; justify-content:center; margin-bottom:1rem;">
                            <div class="card manager" data-psu="true" data-status="filled" data-department="executive" data-filled="0" data-vacant="0" data-psu-count="1" style="min-width:220px; border-left-color:#6d3b8b;">
                                <div class="title">Systems Manager</div>
                                <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                <div class="report-line">⬆️ Reports to Mr Mduba</div>
                            </div>
                        </div>
                        
                        <!-- Connector to team -->
                        <div class="top-connector" style="height:20px;"></div>
                        
                        <!-- Team reporting to Systems Manager -->
                        <div class="hierarchy-middle">
                            <div class="direct-report-group">
                                <div class="card tech" data-psu="true" data-status="filled" data-department="executive" data-filled="0" data-vacant="0" data-psu-count="1">
                                    <div class="title">Training Lead & Systems Controller</div>
                                    <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                    <div class="report-line">⬆️ Reports to Systems Manager</div>
                                </div>
                            </div>
                            
                            <div class="direct-report-group">
                                <div class="card tech" data-psu="true" data-status="filled" data-department="executive" data-filled="0" data-vacant="0" data-psu-count="1">
                                    <div class="title">System Compliance Lead / IRM</div>
                                    <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                    <div class="report-line">⬆️ Reports to Systems Manager</div>
                                </div>
                            </div>
                            
                            <div class="direct-report-group">
                                <div class="card admin" data-psu="true" data-status="filled" data-department="executive" data-filled="0" data-vacant="0" data-psu-count="1">
                                    <div class="title">Snr Admin Officer / IRM / Data</div>
                                    <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                    <div class="report-line">⬆️ Reports to Systems Manager</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        
        // ==================== DIRECTOR DELIVERY - Mr Sivuka (6 PILLARS) ====================
        delivery: `
            <div class="org-section" data-department="delivery">
                <h2 style="color:#1d4164; margin-bottom:0.5rem;">🏗️ DIRECTOR DELIVERY · Mr Sivuka</h2>
                
                <div class="hierarchy-container">
                    <!-- DIRECTOR DELIVERY - TOP LEVEL -->
                    <div class="hierarchy-top">
                        <div class="card director" data-psu="false" data-status="filled" data-department="delivery" data-filled="1" data-vacant="0" data-psu-count="0" style="min-width:250px;">
                            <div class="title">DIRECTOR DELIVERY</div>
                            <div style="font-size:1.1rem;">Mr Sivuka</div>
                            <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                        </div>
                    </div>
                    
                    <!-- CONNECTOR LINE -->
                    <div class="top-connector"></div>
                    
                    <!-- 6 PILLAR MANAGERS (Direct reports to Mr Sivuka) -->
                    <div class="multi-report-section">
                        <div class="section-title">⬇️ 6 PILLAR MANAGERS (report to Mr Sivuka) ⬇️</div>
                        <div class="hierarchy-middle">
                            
                            <!-- Pillar 1: Chief Architect -->
                            <div class="direct-report-group">
                                <div class="card chief" data-psu="false" data-status="filled" data-department="delivery" data-filled="1" data-vacant="0" data-psu-count="0">
                                    <div class="title">Chief Architect</div>
                                    <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                                </div>
                                <!-- Connector to team -->
                                <div class="report-connector"></div>
                                <!-- Team under Chief Architect -->
                                <div class="team-grid">
                                    <div class="card tech" data-psu="false" data-status="filled" data-department="delivery" data-filled="1" data-vacant="0" data-psu-count="0">
                                        <div class="title">Architect (Dept)</div>
                                        <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                                    </div>
                                    <div class="card tech" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="1" style="border-left-color:#6d3b8b;">
                                        <div class="title">Architect (PSU)</div>
                                        <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Pillar 2: Chief Quantity Surveyor -->
                            <div class="direct-report-group">
                                <div class="card chief" data-psu="false" data-status="vacant" data-department="delivery" data-filled="0" data-vacant="1" data-psu-count="0">
                                    <div class="title">Chief Quantity Surveyor</div>
                                    <div class="counts"><span class="vacant-badge">VACANT 1</span></div>
                                </div>
                                <!-- Connector to team -->
                                <div class="report-connector"></div>
                                <!-- Team under Chief QS -->
                                <div class="team-grid">
                                    <div class="card tech" data-psu="false" data-status="filled" data-department="delivery" data-filled="1" data-vacant="0" data-psu-count="0">
                                        <div class="title">Quantity Surveyor (Dept)</div>
                                        <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                                    </div>
                                    <div class="card tech" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="3" style="border-left-color:#6d3b8b;">
                                        <div class="title">Quantity Surveyors (PSU)</div>
                                        <div class="counts"><span class="psu-badge">PSU 3</span></div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Pillar 3: Chief Engineer -->
                            <div class="direct-report-group">
                                <div class="card chief" data-psu="true" data-status="filled" data-department="delivery" data-filled="1" data-vacant="0" data-psu-count="1">
                                    <div class="title">Chief Engineer</div>
                                    <div class="counts"><span class="filled-badge">FILLED 1</span> <span class="psu-badge">PSU 1</span></div>
                                </div>
                                <!-- Connector to team -->
                                <div class="report-connector"></div>
                                <!-- Team under Chief Engineer -->
                                <div class="team-grid">
                                    <div class="card tech" data-psu="false" data-status="filled" data-department="delivery" data-filled="1" data-vacant="0" data-psu-count="0">
                                        <div class="title">Engineer / DD Infrastructure</div>
                                        <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Pillar 4: Deputy Director Equipment (has complex team) -->
                            <div class="direct-report-group" style="min-width:300px;">
                                <div class="card director" data-psu="false" data-status="filled" data-department="delivery" data-filled="1" data-vacant="0" data-psu-count="0">
                                    <div class="title">Deputy Director Equipment</div>
                                    <div>Mr Msiwa</div>
                                    <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                                </div>
                                
                                <!-- Connector to Programme Manager -->
                                <div class="report-connector"></div>
                                
                                <!-- Programme Manager (reports to Mr Msiwa) -->
                                <div class="card manager" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="1" style="border-left-color:#6d3b8b; margin-bottom:0.5rem;">
                                    <div class="title">Programme Manager (PSU)</div>
                                    <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                    <div class="report-line">⬆️ Reports to Mr Msiwa</div>
                                </div>
                                
                                <!-- Connector to Programme Manager's team -->
                                <div class="report-connector"></div>
                                
                                <!-- Programme Manager's team (grid) -->
                                <div class="team-grid" style="flex-direction:column; align-items:center;">
                                    <div style="display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center;">
                                        <div class="card manager" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="6">
                                            <div class="title">Senior Project Managers</div>
                                            <div class="counts"><span class="psu-badge">PSU 6</span></div>
                                        </div>
                                        <div class="card admin" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="4">
                                            <div class="title">Administrators</div>
                                            <div class="counts"><span class="psu-badge">PSU 4</span></div>
                                        </div>
                                        <div class="card admin" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="2">
                                            <div class="title">Snr Admin Officers</div>
                                            <div class="counts"><span class="psu-badge">PSU 2</span></div>
                                        </div>
                                        <div class="card sup" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="8">
                                            <div class="title">Clerks of Works</div>
                                            <div class="counts"><span class="psu-badge">PSU 8</span></div>
                                        </div>
                                        <div class="card tech" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="1">
                                            <div class="title">Civil Engineer</div>
                                            <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                        </div>
                                        <div class="card tech" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="1">
                                            <div class="title">Mechanical Engineer</div>
                                            <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                        </div>
                                        <div class="card tech" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="1">
                                            <div class="title">Electrical Engineer</div>
                                            <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                        </div>
                                        <div class="card specialist" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="2">
                                            <div class="title">Stakeholder Engagement</div>
                                            <div class="counts"><span class="psu-badge">PSU 2</span></div>
                                        </div>
                                        <div class="card sup" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="2">
                                            <div class="title">Health & Safety Agents</div>
                                            <div class="counts"><span class="psu-badge">PSU 2</span></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Direct reports to Mr Msiwa (Filled) -->
                                <div style="margin-top:1.5rem; border-top:1px dashed #b0c4de; padding-top:1rem;">
                                    <div style="text-align:center; font-weight:600; margin-bottom:0.5rem;">⬇️ Direct reports to Mr Msiwa (FILLED) ⬇️</div>
                                    <div class="team-grid">
                                        <div class="card sup" data-psu="false" data-status="filled" data-department="delivery" data-filled="5" data-vacant="0" data-psu-count="0">
                                            <div class="title">Control Works Inspectors</div>
                                            <div class="counts"><span class="filled-badge">FILLED 5</span> <span>h/o</span></div>
                                        </div>
                                        <div class="card sup" data-psu="false" data-status="mixed" data-department="delivery" data-filled="4" data-vacant="3" data-psu-count="0">
                                            <div class="title">Chief Works Inspectors</div>
                                            <div class="counts"><span class="filled-badge">FILLED 4</span> <span class="vacant-badge">VACANT 3</span></div>
                                        </div>
                                        <div class="card sup" data-psu="false" data-status="filled" data-department="delivery" data-filled="24" data-vacant="0" data-psu-count="0">
                                            <div class="title">Works Inspectors</div>
                                            <div class="counts"><span class="filled-badge">FILLED 24</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Pillar 5: Deputy Director SCM (simplified - would continue similar structure) -->
                            <div class="direct-report-group" style="min-width:280px;">
                                <div class="card director" data-psu="false" data-status="filled" data-department="delivery" data-filled="1" data-vacant="0" data-psu-count="0">
                                    <div class="title">Deputy Director SCM</div>
                                    <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                                </div>
                                
                                <!-- Direct reports to DD SCM -->
                                <div class="report-connector"></div>
                                <div class="team-grid">
                                    <div class="card director" data-psu="false" data-status="filled" data-department="delivery" data-filled="1" data-vacant="0" data-psu-count="0">
                                        <div class="title">Assistant Director SCM</div>
                                        <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                                    </div>
                                    <div class="card admin" data-psu="false" data-status="filled" data-department="delivery" data-filled="2" data-vacant="0" data-psu-count="0">
                                        <div class="title">Clerk SCM</div>
                                        <div class="counts"><span class="filled-badge">FILLED 2</span></div>
                                    </div>
                                </div>
                                
                                <!-- SCM LEAD (PSU) reports to DD SCM -->
                                <div class="report-connector"></div>
                                <div class="card manager" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="1" style="border-left-color:#6d3b8b;">
                                    <div class="title">SCM LEAD (PSU)</div>
                                    <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                </div>
                                
                                <!-- SCM LEAD's team -->
                                <div class="report-connector"></div>
                                <div class="team-grid">
                                    <div class="card manager" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="1">
                                        <div class="title">SCM Programme Manager</div>
                                        <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                    </div>
                                    <div class="card manager" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="1">
                                        <div class="title">SCM DD Audit Readiness</div>
                                        <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                    </div>
                                    <div class="card manager" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="1">
                                        <div class="title">SCM DD Procurement</div>
                                        <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                    </div>
                                    <div class="card manager" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="1">
                                        <div class="title">SCM Policy Development</div>
                                        <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                    </div>
                                    <div class="card manager" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="7">
                                        <div class="title">SCM IA Support</div>
                                        <div class="counts"><span class="psu-badge">PSU 7</span></div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Pillar 6: Deputy Director Finance -->
                            <div class="direct-report-group" style="min-width:280px;">
                                <div class="card director" data-psu="false" data-status="filled" data-department="delivery" data-filled="1" data-vacant="0" data-psu-count="0">
                                    <div class="title">Deputy Director Finance</div>
                                    <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                                </div>
                                
                                <!-- Direct reports -->
                                <div class="report-connector"></div>
                                <div class="team-grid">
                                    <div class="card director" data-psu="false" data-status="vacant" data-department="delivery" data-filled="0" data-vacant="1" data-psu-count="0">
                                        <div class="title">Assistant Director Finance</div>
                                        <div class="counts"><span class="vacant-badge">VACANT 1</span></div>
                                    </div>
                                    <div class="card admin" data-psu="false" data-status="filled" data-department="delivery" data-filled="1" data-vacant="0" data-psu-count="0">
                                        <div class="title">Senior State Accountant</div>
                                        <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                                    </div>
                                    <div class="card admin" data-psu="false" data-status="filled" data-department="delivery" data-filled="2" data-vacant="0" data-psu-count="0">
                                        <div class="title">Accounting Clerk</div>
                                        <div class="counts"><span class="filled-badge">FILLED 2</span></div>
                                    </div>
                                </div>
                                
                                <!-- PSU Team under Assistant Director -->
                                <div class="report-connector"></div>
                                <div style="font-size:0.9rem; text-align:center; margin:0.5rem 0;">PSU team (report to Asst Director)</div>
                                <div class="team-grid">
                                    <div class="card admin" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="1">
                                        <div class="title">Finance Administrator Lead</div>
                                        <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                    </div>
                                    <div class="card admin" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="1">
                                        <div class="title">Systems & Reporting Lead</div>
                                        <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                    </div>
                                    <div class="card admin" data-psu="true" data-status="filled" data-department="delivery" data-filled="0" data-vacant="0" data-psu-count="3">
                                        <div class="title">Accounting Clerks (Finance)</div>
                                        <div class="counts"><span class="psu-badge">PSU 3</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        
        // ==================== DIRECTOR PLANNING - Mr Pefole ====================
        planning: `
            <div class="org-section" data-department="planning">
                <h2 style="color:#1d4164;">📋 DIRECTOR PLANNING · Mr Pefole</h2>
                
                <div class="hierarchy-container">
                    <!-- DIRECTOR PLANNING - TOP LEVEL -->
                    <div class="hierarchy-top">
                        <div class="card director" data-psu="false" data-status="filled" data-department="planning" data-filled="1" data-vacant="0" data-psu-count="0" style="min-width:250px;">
                            <div class="title">Director: Planning</div>
                            <div style="font-size:1.1rem;">Mr Pefole</div>
                            <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                        </div>
                    </div>
                    
                    <!-- CONNECTOR LINE -->
                    <div class="top-connector"></div>
                    
                    <!-- PLANNING TEAMS - multiple groups -->
                    <div class="multi-report-section">
                        <div class="section-title">⬇️ PLANNING TEAMS ⬇️</div>
                        <div class="hierarchy-middle" style="gap:1rem;">
                            
                            <!-- Engineering Team -->
                            <div class="direct-report-group">
                                <div class="card chief" data-psu="false" data-status="vacant" data-department="planning" data-filled="0" data-vacant="1" data-psu-count="0">
                                    <div class="title">Chief Electrical/Mechanical Engineer</div>
                                    <div class="counts"><span class="vacant-badge">VACANT 1</span></div>
                                </div>
                                <div class="report-connector"></div>
                                <div class="team-grid">
                                    <div class="card tech" data-psu="false" data-status="vacant" data-department="planning" data-filled="0" data-vacant="1" data-psu-count="0">
                                        <div class="title">Electrical Engineer</div>
                                        <div class="counts"><span class="vacant-badge">VACANT 1</span></div>
                                    </div>
                                    <div class="card tech" data-psu="false" data-status="vacant" data-department="planning" data-filled="0" data-vacant="1" data-psu-count="0">
                                        <div class="title">Mechanical Engineer</div>
                                        <div class="counts"><span class="vacant-badge">VACANT 1</span></div>
                                    </div>
                                </div>
                                
                                <div style="margin-top:1rem;">
                                    <div class="card chief" data-psu="false" data-status="vacant" data-department="planning" data-filled="0" data-vacant="1" data-psu-count="0">
                                        <div class="title">Chief Civil/Structural Engineer</div>
                                        <div class="counts"><span class="vacant-badge">VACANT 1</span></div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Town Planning Team -->
                            <div class="direct-report-group">
                                <div class="card chief" data-psu="false" data-status="filled" data-department="planning" data-filled="1" data-vacant="0" data-psu-count="0">
                                    <div class="title">Chief Town & Regional Planner</div>
                                    <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                                </div>
                                <div class="report-connector"></div>
                                <div class="team-grid">
                                    <div class="card specialist" data-psu="false" data-status="filled" data-department="planning" data-filled="1" data-vacant="0" data-psu-count="0">
                                        <div class="title">Town & Regional Planner</div>
                                        <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                                    </div>
                                    <div class="card tech" data-psu="false" data-status="vacant" data-department="planning" data-filled="0" data-vacant="1" data-psu-count="0">
                                        <div class="title">GIS Control Technologist</div>
                                        <div class="counts"><span class="vacant-badge">VACANT 1</span></div>
                                    </div>
                                    <div class="card tech" data-psu="false" data-status="filled" data-department="planning" data-filled="1" data-vacant="0" data-psu-count="0">
                                        <div class="title">GIS Technician</div>
                                        <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Architecture & QS Team -->
                            <div class="direct-report-group">
                                <div style="display:flex; flex-direction:column; gap:0.5rem; width:100%;">
                                    <div class="card tech" data-psu="false" data-status="vacant" data-department="planning" data-filled="0" data-vacant="1" data-psu-count="0">
                                        <div class="title">Architect (Dept)</div>
                                        <div class="counts"><span class="vacant-badge">VACANT 1</span></div>
                                    </div>
                                    <div class="card tech" data-psu="true" data-status="filled" data-department="planning" data-filled="0" data-vacant="0" data-psu-count="1" style="border-left-color:#6d3b8b;">
                                        <div class="title">Architect (PSU)</div>
                                        <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                    </div>
                                    <div class="card tech" data-psu="false" data-status="vacant" data-department="planning" data-filled="0" data-vacant="1" data-psu-count="0">
                                        <div class="title">Architect (contract)</div>
                                        <div class="counts"><span class="vacant-badge">VACANT 1</span></div>
                                    </div>
                                    <div class="card tech" data-psu="false" data-status="vacant" data-department="planning" data-filled="0" data-vacant="1" data-psu-count="0">
                                        <div class="title">Quantity Surveyor (Dept)</div>
                                        <div class="counts"><span class="vacant-badge">VACANT 1</span></div>
                                    </div>
                                    <div class="card tech" data-psu="true" data-status="filled" data-department="planning" data-filled="0" data-vacant="0" data-psu-count="1" style="border-left-color:#6d3b8b;">
                                        <div class="title">Quantity Surveyor (PSU)</div>
                                        <div class="counts"><span class="psu-badge">PSU 1</span></div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Properties Team -->
                            <div class="direct-report-group">
                                <div class="card director" data-psu="false" data-status="filled" data-department="planning" data-filled="1" data-vacant="0" data-psu-count="0">
                                    <div class="title">Deputy Director Properties</div>
                                    <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                                </div>
                                <div class="report-connector"></div>
                                <div class="team-grid">
                                    <div class="card manager" data-psu="false" data-status="filled" data-department="planning" data-filled="3" data-vacant="0" data-psu-count="0">
                                        <div class="title">Assistant Director Properties</div>
                                        <div class="counts"><span class="filled-badge">FILLED 3</span></div>
                                    </div>
                                    <div class="card admin" data-psu="false" data-status="mixed" data-department="planning" data-filled="1" data-vacant="2" data-psu-count="0">
                                        <div class="title">Administration Officers</div>
                                        <div class="counts"><span class="filled-badge">FILLED 1</span> <span class="vacant-badge">VACANT 2</span></div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Education Specialists -->
                            <div class="direct-report-group">
                                <div class="card chief" data-psu="false" data-status="filled" data-department="planning" data-filled="1" data-vacant="0" data-psu-count="0">
                                    <div class="title">Chief Education Specialist</div>
                                    <div class="counts"><span class="filled-badge">FILLED 1</span></div>
                                </div>
                                <div class="report-connector"></div>
                                <div class="team-grid">
                                    <div class="card manager" data-psu="false" data-status="mixed" data-department="planning" data-filled="4" data-vacant="1" data-psu-count="0">
                                        <div class="title">Deputy Chief Education Specialist</div>
                                        <div class="counts"><span class="filled-badge">FILLED 4</span> <span class="vacant-badge">VACANT 1</span></div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Technical Support -->
                            <div class="direct-report-group">
                                <div class="card director" data-psu="false" data-status="mixed" data-department="planning" data-filled="1" data-vacant="1" data-psu-count="0">
                                    <div class="title">Deputy Director Technical Support</div>
                                    <div class="counts"><span class="filled-badge">FILLED 1</span> <span class="vacant-badge">VACANT 1</span></div>
                                    <div>(contract)</div>
                                </div>
                                <div class="report-connector"></div>
                                <div class="team-grid">
                                    <div class="card admin" data-psu="false" data-status="filled" data-department="planning" data-filled="2" data-vacant="0" data-psu-count="0">
                                        <div class="title">Senior Admin Officers</div>
                                        <div class="counts"><span class="filled-badge">FILLED 2</span></div>
                                        <div>Data analysts</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    // Function to calculate and display totals
    function calculateTotals() {
        const container = document.getElementById('viewContainer');
        if (!container) return;
        
        const cards = container.querySelectorAll('.card');
        let totalFilled = 0;
        let totalVacant = 0;
        let totalPsu = 0;
        
        cards.forEach(card => {
            const filled = parseInt(card.getAttribute('data-filled')) || 0;
            const vacant = parseInt(card.getAttribute('data-vacant')) || 0;
            const psu = parseInt(card.getAttribute('data-psu-count')) || 0;
            
            totalFilled += filled;
            totalVacant += vacant;
            totalPsu += psu;
        });
        
        let totalsDiv = container.querySelector('.totals-summary');
        if (!totalsDiv) {
            totalsDiv = document.createElement('div');
            totalsDiv.className = 'totals-summary';
            totalsDiv.style.cssText = 'display:flex; gap:2rem; justify-content:center; margin-bottom:2rem; padding:1rem; background:#e5eff9; border-radius:50px;';
            container.insertBefore(totalsDiv, container.firstChild);
        }
        
        totalsDiv.innerHTML = `
            <div class="stat" style="background:#00C85220; padding:0.5rem 1.5rem; border-radius:40px;">
                <span style="font-weight:600;">✅ FILLED:</span> <span style="font-weight:700; color:#00C852;">${totalFilled}</span>
            </div>
            <div class="stat" style="background:#FF444420; padding:0.5rem 1.5rem; border-radius:40px;">
                <span style="font-weight:600;">⚠️ VACANT:</span> <span style="font-weight:700; color:#FF4444;">${totalVacant}</span>
            </div>
            <div class="stat" style="background:#AA66CC20; padding:0.5rem 1.5rem; border-radius:40px;">
                <span style="font-weight:600;">🟣 PSU:</span> <span style="font-weight:700; color:#AA66CC;">${totalPsu}</span>
            </div>
        `;
    }

    // Filter functions
    function matchesDepartment(card, deptFilter) {
        if (deptFilter === 'all') return true;
        const cardDept = card.getAttribute('data-department');
        return cardDept === deptFilter;
    }
    
    function matchesStatus(card, statusFilter) {
        if (statusFilter === 'all') return true;
        const cardStatus = card.getAttribute('data-status');
        if (statusFilter === 'filled') return cardStatus === 'filled' || cardStatus === 'mixed';
        if (statusFilter === 'vacant') return cardStatus === 'vacant' || cardStatus === 'mixed';
        return true;
    }
    
    function matchesPsu(card, psuFilter) {
        if (psuFilter === 'all') return true;
        const cardPsu = card.getAttribute('data-psu') === 'true';
        if (psuFilter === 'psu-only') return cardPsu;
        if (psuFilter === 'psu-exclude') return !cardPsu;
        return true;
    }
    
    function applyFilters() {
        const container = document.getElementById('viewContainer');
        if (!container) return;
        
        const cards = container.querySelectorAll('.card');
        const pillars = container.querySelectorAll('.pillar');
        const directGroups = container.querySelectorAll('.direct-report-group');
        const multiSections = container.querySelectorAll('.multi-report-section');
        
        cards.forEach(card => {
            const deptMatch = matchesDepartment(card, currentFilters.department);
            const statusMatch = matchesStatus(card, currentFilters.status);
            const psuMatch = matchesPsu(card, currentFilters.psu);
            
            if (deptMatch && statusMatch && psuMatch) {
                card.style.display = '';
                if (currentFilters.psu === 'psu-only' && card.getAttribute('data-psu') === 'true') {
                    card.classList.add('filter-highlight');
                } else {
                    card.classList.remove('filter-highlight');
                }
            } else {
                card.style.display = 'none';
            }
        });
        
        // Hide empty groups
        directGroups.forEach(group => {
            const visibleCards = Array.from(group.querySelectorAll('.card')).filter(card => card.style.display !== 'none');
            group.style.display = visibleCards.length === 0 ? 'none' : '';
        });
        
        multiSections.forEach(section => {
            const visibleGroups = Array.from(section.querySelectorAll('.direct-report-group')).filter(group => group.style.display !== 'none');
            section.style.display = visibleGroups.length === 0 ? 'none' : '';
        });
        
        pillars.forEach(pillar => {
            const visibleCards = Array.from(pillar.querySelectorAll('.card')).filter(card => card.style.display !== 'none');
            pillar.style.display = visibleCards.length === 0 ? 'none' : '';
        });
        
        calculateTotals();
    }
    
    function resetFilters() {
        currentFilters = {
            department: 'all',
            status: 'all',
            psu: 'all'
        };
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active-filter');
        });
        document.querySelectorAll('[data-filter="dept-all"], [data-filter="status-all"], [data-filter="psu-all"]').forEach(btn => {
            btn.classList.add('active-filter');
        });
    }

    function loadView(viewName) {
        const container = document.getElementById('viewContainer');
        if (!container) return;
        
        container.innerHTML = views[viewName] || '<div class="loader">view not found</div>';
        currentView = viewName;
        
        resetFilters();
        setTimeout(() => calculateTotals(), 50);
    }

    function initTabs() {
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const viewName = tab.getAttribute('data-view');
                loadView(viewName);
            });
        });
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filterType = btn.getAttribute('data-filter').split('-')[0];
                const filterValue = btn.getAttribute('data-filter').split('-')[1];
                
                const groupButtons = document.querySelectorAll(`[data-filter^="${filterType}-"]`);
                groupButtons.forEach(b => b.classList.remove('active-filter'));
                btn.classList.add('active-filter');
                
                if (filterType === 'dept') currentFilters.department = filterValue;
                if (filterType === 'status') currentFilters.status = filterValue;
                if (filterType === 'psu') currentFilters.psu = filterValue;
                
                applyFilters();
            });
        });
        
        loadView('executive');
    }

    window.addEventListener('DOMContentLoaded', () => {
        initTabs();
    });
})();