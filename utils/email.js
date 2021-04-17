const email_ui = (email, name, link) => {
    const ui = `
<div id="outerBox" style="width: 100%; min-width: 250px; background-color: #e3edf5; margin: 0 0;">
  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1440 320">
    <path fill="#467794" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,96C384,139,480,213,576,202.7C672,192,768,96,864,69.3C960,43,1056,85,1152,122.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
  </svg>
  <div id="box" style="position: relative; max-width: 900px; min-width: 60%; width: 70%; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0 auto; font-size: 1.3rem; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
'Lucida Sans', Arial, sans-serif; font-weight: 500;">
    <div id="p" style="margin: 1.5rem; text-align: center;">Dear ${name},</div>
    <div id="p" style="margin: 1.5rem; text-align: center;">Welcome to Cleanurge.</div>
    <div id="p" style="margin: 1.5rem; text-align: center;">
      Thanks for signing up! We made Cleanurge to solve the challenges of
      waste management by bridging the gap between residents and
      municipalities.
    </div>
    <div id="p" style="margin: 1.5rem; text-align: center;">
      Now, you're one step closer to help solve the challenges of waste
      management. Verify your email (${email}) by clicking on the link below to start
      using the Cleanurge platform.
    </div>
    <a onclick="window.open('${link}', '_blank')" style="padding: 1rem; background-color: #467794; width: 80%; text-align: center; max-width: 350px; margin: 0 auto; color: white;">Activate</a>
    <div id="p" style="margin: 1.5rem; text-align: center;">
      We're here every step of the way. If you have any questions, just
      reply to this email and it would be our pleasure to help.
    </div>
    <div id="p" style="margin: 1.5rem; text-align: center; color: gray; font-size: 0.9rem;">Student Developer Team, DSC KGEC.</div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1440 320">
    <path fill="#143950" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,96C384,139,480,213,576,202.7C672,192,768,96,864,69.3C960,43,1056,85,1152,122.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
  </svg>
</div>
    `;
    return ui;
};

module.exports = email_ui;
