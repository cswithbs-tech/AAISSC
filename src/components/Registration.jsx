import React, { useEffect, useRef } from 'react';
import './Registration.css';

const fees = [
  { cat: 'Students (UG/PG)',               early: '₹ 400', spot: '₹ 500' },
  { cat: 'Research Scholars',              early: '₹ 700', spot: '₹ 800' },
  { cat: 'Teachers / Scientists / Delegates', early: '₹ 900', spot: '₹ 1000' },
];

const accom = [
  { cat: 'Students / Research Scholars', ac: '—', nonAc: '₹ 350', dorm: '₹ 150' },
  { cat: 'Teachers / Scientists',        ac: '₹ 1100', nonAc: '₹ 600', dorm: '—' },
];

const Registration = () => {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach((el, i) => { el.style.transitionDelay = `${i * 0.12}s`; obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="registration" className="section section--alt" ref={ref}>
      <div className="container">

        <div className="reveal">
          <p className="section__label">Join Us</p>
          <h2 className="section__title">Registration &amp; Accommodation</h2>
          <span className="gold-rule" />
        </div>

        <div className="reg__layout">
          {/* ── Left: Dates + Bank ── */}
          <div className="reg__sidebar">
            <div className="reg__dates card reveal">
              <h3>📅 Important Dates</h3>
              <div className="reg__date-list">
                <div className="reg__date-row">
                  <span>Abstract submission deadline</span>
                  <strong>05 Sep 2026</strong>
                </div>
                <div className="reg__date-row">
                  <span>Acceptance notification</span>
                  <strong>08 Sep 2026</strong>
                </div>
                <div className="reg__date-row highlight">
                  <span>Seminar dates</span>
                  <strong>24–25 Sep 2026</strong>
                </div>
              </div>
            </div>

            <div className="reg__bank card reveal">
              <h3>🏦 Payment Details</h3>
              <p className="reg__bank-note">Pay registration fee via bank transfer:</p>
              <div className="reg__bank-rows">
                <div className="reg__bank-row"><span>Bank</span><strong>Punjab National Bank</strong></div>
                <div className="reg__bank-row"><span>Account No.</span><strong>0297050310154</strong></div>
                <div className="reg__bank-row"><span>Branch</span><strong>Sat Bankura</strong></div>
                <div className="reg__bank-row"><span>IFSC</span><strong>PUNB0029720</strong></div>
              </div>
              <a href="https://mcconline.org.in/ERPLMCC/Seminar" target="_blank" rel="noopener noreferrer" className="btn btn--primary reg__cta">
                Fill Registration Form →
              </a>
            </div>
          </div>

          {/* ── Right: Tables ── */}
          <div className="reg__tables">
            <div className="reg__table-block card reveal">
              <h3>Registration Fee</h3>
              <table className="reg__table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Before 10 Sep</th>
                    <th>Spot Registration</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map(({ cat, early, spot }) => (
                    <tr key={cat}>
                      <td>{cat}</td>
                      <td className="fee-cell">{early}</td>
                      <td className="fee-cell spot">{spot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="reg__table-block card reveal">
              <h3>Accommodation (Per Night)</h3>
              <p className="reg__accom-note">Available in nearby guest houses / hotels on request (payment basis).</p>
              <table className="reg__table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>AC</th>
                    <th>Non-AC</th>
                    <th>Dormitory</th>
                  </tr>
                </thead>
                <tbody>
                  {accom.map(({ cat, ac, nonAc, dorm }) => (
                    <tr key={cat}>
                      <td>{cat}</td>
                      <td className="fee-cell">{ac}</td>
                      <td className="fee-cell">{nonAc}</td>
                      <td className="fee-cell">{dorm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Registration;
