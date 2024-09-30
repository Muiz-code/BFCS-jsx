import logo from "../../assets/BFCS LOGO/BFCS LOGO.png";
import img7 from "../../assets/TellAFriend.jpg";
import TellaFriend from "../../Components/TellAFriend";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TellAFriend = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <div className="bg-black absolute top-0 bg-opacity-45 h-[100vh] w-[100%] h50vh carouselBg">
          <div
            data-aos="fade-right"
            className=" flex flex-col gap-[20px] justify-center place-items-center mt-[250px] carouselItem"
          >
            <img src={logo} className="w-[10%]" alt="" />

            <h1 className="text-[70px] text-white font-extrabold">
              TELL A FRIEND
            </h1>
          </div>
        </div>
        <div>
          <img src={img7} className="w-screen h-[100vh] h50vh" alt="" />
        </div>
      </div>
      <div
        data-aos="zoom-out"
        className="bg-[#ebebeb87] py-[30px] flex flex-col gap-5"
      >
        <h1
          data-aos="fade-down"
          className="text-[30px] text-center text-[#005883] font-bold h4"
        >
          REFER A FRIEND
        </h1>
        <h2
          data-aos="fade-down"
          className="text-[25px] text-center text-[#005883] font-bold h2"
        >
          IT PAYS TO GOSSIP
        </h2>
        <div data-aos="fade-right" className="px-[5%]">
          <p className="text-justify">
            If you’re an existing customer of ours and love what we do, why not
            recommend us to your friends and family. You can refer us to as many
            people as you want. If your referral signs up to our regular
            cleaning service, we will return the favour with a bonus
          </p>
          <div>
            <p>How it works:</p>
            <ul className="list p5">
              <li className="list">
                All they have to do is mention your name and address. it’s that
                easy.
              </li>
              <li>
                You will receive a bonus which you can collect from our office
                or via bank transfer or we can simply deduct it from your next
                bill.
              </li>
            </ul>
            <p>
              You can collect your bonus from our HQ or we can make a bank
              transfer or deduct the money from your next bill. It’s completely
              up to you.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="zoom-out" className="px-[5%] bg-[#ebebeb87]">
        <TellaFriend
          width="w-[100%] w100 "
          inputWidth="w-full"
          inputWidth1="py-4"
          radioStyle="flex gap-3"
          terms="I agree that the Company can use my details to contact me in regards to my enquiry and for future promotions."
          heading="Terms: Please note that your referral has to sign up for our regular cleaning service for a minimum of 6 months."
          formFields={[
            {
              label: "Full Name",
              name: "Client full Name",
              placeholder: "Full Name",
              rules: [{ required: true }],
            },
            {
              label: "Email",
              name: "Client Email",
              rules: [{ required: true }],
              placeholder: "Email",
            },
            {
              label: "Phone Number",
              name: "Client Phone Number",
              placeholder: "Phone Number",
              rules: [
                { required: true, message: "Please input your phone number!" },
                { pattern: /^\d{12}$/, message: "Invalid Phone number" },
              ],
            },
            {
              label: "Address",
              name: "Client Address",
              placeholder: "Address",
              rules: [{ required: true }],
            },
            {
              label: "Message",
              name: "Something about client referral",
              placeholder: "Write something about them we can use to relate?",
              rules: [{ required: true }],
              type: "textarea",
              rows: 4,
            },
            {
              label: "Name",
              name: "Client refferal Name",
              placeholder: "Their Name",
              rules: [{ required: true }],
            },
            {
              label: "Email",
              name: "Client refferal Email",
              rules: [{ required: true }],
              placeholder: "Their Email",
            },
            {
              label: "Phone Number",
              name: "Client refferal phone Number",
              placeholder: "Their Phone Number",
              rules: [{ required: true }],
            },
            {
              label: "Address",
              name: "Client refferal address",
              placeholder: "Their Address",
              rules: [{ required: true }],
            },
            {
              label: "Would you like us to phone the new client?",
              name: "agree",
              type: "radio",
              options: ["Yes", "No"],
              rules: [{ required: true }],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default TellAFriend;
