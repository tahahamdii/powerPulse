import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Join the Fitness Revolution: Don't miss out on the opportunity to be part of the Power Pulse community. Join us today and experience a fitness revolution like no other in Tunis, Tunisia. Unleash your power, ignite your potential, and elevate your fitness journey to new heights at Power Pulse.
          </p>
          <p>© PowerPulse All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Instagram</p>
          <p className="my-5">Facebook</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">hamdi.taha@esprit.tn</p>
          <p>+216 95 092 609 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
