import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h1>Cohort Details</h1> {/* ✅ Corrected heading from the file */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        <CohortDetails
          name="INTADMDF10-.NET FSD"
          status="Completed"
          trainer="Karthick"
          startDate="03/04/2023"
          endDate="04/07/2023"
        />
        <CohortDetails
          name="ADM21JF014-Java FSD"
          status="Ongoing"
          trainer="Karthick"
          startDate="06/07/2023"
          endDate="28/09/2023"
        />
        <CohortDetails
          name="CDBJF21025-Java FSD"
          status="Completed"
          trainer="Mukesh"
          startDate="03/04/2023"
          endDate="28/07/2023"
        />
      </div>
    </div>
  );
}

export default App;
