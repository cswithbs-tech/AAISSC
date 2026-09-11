import React from 'react';
import Reveal from './Reveal';
import './Registration.css';

const Registration = () => {
  return (
    <section id="registration" className="section">
      <Reveal>
        <h2 className="section-title">Registration & Accommodation</h2>
      </Reveal>
      
      <div className="registration-container">
        <Reveal direction="left" delay={100} className="h-100">
          <div className="registration-info glass h-100" style={{padding: '2.5rem'}}>
            <h3>Important Dates</h3>
            <ul className="dates-list">
              <li>
                <span className="date-label">Last date for submission of Abstract:</span>
                <span className="date-value">05.09.2026</span>
              </li>
              <li>
                <span className="date-label">Notification of Acceptance:</span>
                <span className="date-value">08.09.2026</span>
              </li>
              <li>
                <span className="date-label">Seminar Dates:</span>
                <span className="date-value">September 24th to 25th 2026</span>
              </li>
            </ul>

            <h3 className="mt-4">Mode of Payment</h3>
            <p>Registration Fees will be paid in the Bank Account.</p>
            <div className="bank-details">
              <p><strong>Bank Name:</strong> Punjab National Bank</p>
              <p><strong>Account No.:</strong> 0297050310154</p>
              <p><strong>Branch Name:</strong> Sat Bankura</p>
              <p><strong>IFSC:</strong> PUNB0029720</p>
            </div>
            <a href="https://mcconline.org.in/ERPLMCC/Seminar" target="_blank" rel="noopener noreferrer" className="btn mt-2">Registration Form</a>
          </div>
        </Reveal>

        <Reveal direction="right" delay={200} className="h-100">
          <div className="registration-tables glass h-100" style={{padding: '2.5rem'}}>
            <h3>Registration Fee</h3>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Within 10.09.2026</th>
                    <th>Spot Registration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Students (UG/PG)</td>
                    <td>Rs. 400.00</td>
                    <td>Rs. 500.00</td>
                  </tr>
                  <tr>
                    <td>Research Scholar</td>
                    <td>Rs. 700.00</td>
                    <td>Rs. 800.00</td>
                  </tr>
                  <tr>
                    <td>Teachers/ Scientists/ Delegates</td>
                    <td>Rs. 900.00</td>
                    <td>Rs. 1000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-4">Accommodation</h3>
            <p className="text-small">Modest accommodation will be provided in the nearest guest house/ hotels for the delegates on request. Accommodation may be booked on payment basis.</p>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>AC</th>
                    <th>NON-AC</th>
                    <th>Dormitory</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Students (UG/PG)/ Research Scholar</td>
                    <td>-- -- --</td>
                    <td>Rs. 350.00</td>
                    <td>Rs. 150.00</td>
                  </tr>
                  <tr>
                    <td>Teachers/ Scientists/ Delegates</td>
                    <td>Rs. 1100.00</td>
                    <td>Rs. 600.00</td>
                    <td>-- -- --</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Registration;
