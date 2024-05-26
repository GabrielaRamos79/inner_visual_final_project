import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  CustomSweetAlertOk,
  CustomSweetAlertError,
} from "../../components/sweetAlertComponent/CustomSweetAlert";

const Terms = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isChecked) {
      CustomSweetAlertError("Por favor, acepta los términos y condiciones antes de continuar.");
    } else {
      CustomSweetAlertOk("Has aceptado los términos y condiciones");
      navigate("/");
    }
  };

  return (
    <>
      <div>
        <h2 className="text-center fw-bold mb-4 ">
          Términos y condiciones de uso de Inner Visuals
        </h2>
        <div className="d-flex justify-content-center">
          <a href="#btn-accept">
            <p className="fw-bold">
              Para aceptar términos y condciones pulsa aqui
            </p>
          </a>
        </div>

        <h1 className="ms-5">1. Introduction</h1>
        <p className="ms-5">
          The Carbon Trust is an independent, private, limited by guarantee
          company registered at 4th Floor, Dorset House, 27-45 Stamford Street,
          London SE1 9NT, UK, with registered number 04190230 (VAT no.
          868049388). The Carbon Trust group [1] makes this Site available to
          enhance public and customer access to information about its business,
          activities, products and services. Please read these website terms of
          use carefully. Your access to, and use of, the websites of the Carbon
          Trust and the Carbon Trust group of 4th Floor, Dorset House, 27-45
          Stamford Street, London SE1 9NT with all URLs being
        </p>

        <p className="ms-5">
          If you do not agree and accept, without limitation or qualification,
          these Terms of Use, then you do not have permission to access the
          contents of the Site and therefore should cease using the Site
          immediately. By continuing to use the Site you are deemed to accept
          and to be bound by the Terms of Use (as amended from time to time). We
          may change the Terms of Use at any time at our sole discretion. Your
          continued use of the Site after any such changes are made will
          constitute your agreement to those varied terms. For the purposes of
          these Terms of Use references to "we", "our" and "us" refers to the
          Carbon Trust, and any reference to "you" or "your" refers to you, the
          user.
        </p>

        <h1 className="ms-5">2. Ownership of Content</h1>
        <p className="fs-6 ms-5">
          The Site and all its contents including, but not limited to, the text,
          Site (as well as the organisation and layout of the Site), design,
          logos, graphics, icons and images (the "Content") are owned and
          copyrighted by the Carbon Trust or others (including our licensors)
          with all rights reserved unless otherwise stated. All trade marks,
          copyright, database rights, design rights, patents and other
          intellectual property rights (together "the Rights") in the Content
          and the Rights in any software or underlying software code that is
          made available for download from the Site ("Software") are owned by us
          or our licensors or are otherwise used by us as permitted by
          applicable law. Any Content that is a trademark, logo or service mark
          is also a registered or unregistered trademark of the Carbon Trust
          and/or third parties. Nothing contained in these Terms of Use shall be
          construed as conferring in any way (express or implied) any licence or
          right to use any Rights of the Carbon Trust or any other third party.
          Where the Content is owned or copyrighted by a third party, certain
          additional restrictions may apply. Where these apply, they will be
          indicated on the relevant part of this Site. Your use of any Content,
          except as provided in the Terms of Use, without the written permission
          of the Carbon Trust is strictly prohibited. You are also advised that
          the Carbon Trust will enforce its intellectual property rights to the
          fullest extent permitted by the law, including the seeking of criminal
          prosecution.
        </p>

        <h1 className="ms-5">3. Your use of the Site</h1>

        <p className="ms-5">
          The Carbon Trust hereby grants you permission to use the Site as
          follows: except where purchasing any publications (in which case our
          conditions of sale will apply) you may download the Content, but only
          for informational, non-commercial, non-profitable and personal use and
          provided that you do not remove, adapt, alter or obscure any of the
          information, Content or notices (such as copyright and other
          proprietary notices) contained in the Content. You may not (without
          the prior written permission of the Carbon Trust or in accordance with
          the Copyright, Designs and Patents Act 1988, as amended) copy,
          reproduce, republish, download, post, broadcast, store in any medium
          (including in any other website), transmit, re-transmit, make
          available to the public, or otherwise use the Content (including, but
          not limited to, "caching" any material on the Site for access by third
          parties or "mirroring" any material on the Site) in any way except for
          your own personal, non-commercial use. Any other use of the Content or
          the Site requires the prior written permission of the Carbon Trust;
          content within the "News and events" sections of the Site may be
          reproduced solely for editorial purposes in daily newspapers, general
          circulation news magazines, trade publications and broadcast media;
          you may not distribute, modify, copy (except as set out herein),
          transmit, display, reuse, reproduce, publish, licence, create
          derivative works from, transfer, sell or otherwise use Content without
          the Carbon Trust's prior written permission; you may not create a
          database in electronic or structured manual form by systematically
          downloading and storing any Content on the Site; as a condition of
          your access to and use of this Site, you warrant to the Carbon Trust
          that you will not use this Site for any purpose that is prohibited by
          these Terms of Use or could constitute or encourage conduct that would
          be considered a criminal offence, give rise to civil liability, or
          otherwise violate any law and that you will not use the Site to post
          or transmit any infringing, threatening, false, misleading, abusive,
          harassing, discriminatory, liable to incite racial hatred, libellous,
          defamatory, vulgar, obscene, indecent, scandalous, offensive,
          inflammatory, blasphemous, pornographic, or profane material or
          material in breach of confidence or privacy. We may, in our absolute
          discretion, remove any material if in our view it falls or might fall
          within the foregoing categories or is otherwise inappropriate. The
          Carbon Trust will fully cooperate with any law enforcement authorities
          or any court order requesting or directing it to disclose the identity
          of anyone posting or transmitting any such information or materials,
          and reserves the right in its discretion to otherwise disclose this
          information. You also warrant that you will tell the Carbon Trust as
          soon as you become aware of any unlawful or prohibited use of this
          Site by any third parties; you are responsible for complying with
          local laws and regulations of the jurisdiction from which you access
          this Site. This Site should not be accessed in any jurisdiction where
          for any reason the publication or availability of this Site is
          prohibited. The Carbon Trust does not warrant or represent that this
          Site complies with laws in all jurisdictions. If you are in doubt, you
          should seek legal advice and if necessary, terminate your use of this
          Site immediately; you are prohibited from using the Site to advertise
          or perform any commercial solicitation; you are prohibited from
          posting or transmitting to or from this Site, any material for which
          you have not obtained all necessary licences or approvals or which is
          technically harmful (including; without limitation, computer viruses,
          logic bombs, Trojan horses, worms, harmful components, corrupted data
          or other malicious software or harmful data); you may not misuse the
          Site (including, without limitation, by (i) hacking; (ii) defacing,
          altering or interfering with the front end 'look and feel' of this
          Site; (iii) obtaining or attempting to obtain unauthorised access (via
          whatever means) to any of our networks; (iv) by taking any action that
          imposes an unreasonable or disproportionately large load on this Site
          or related infrastructure; or by (v) using any software, routine or
          device to interfere or attempt to interfere electronically or manually
          with the operation or functionality of this Site (including but not
          limited to uploading or making available files containing corrupt data
          or viruses via whatever means)); responsibility for your keeping
          secure any passwords issued rests with you; you are solely responsible
          for any information you post to any forums or discussions hosted on
          the Site and you warrant that any such information is non-confidential
          and non-proprietary; you agree that any information posted on forums
          or discussions hosted on the Site will not be false, unlawful,
          misleading, libelous, defamatory, obscene or indecent, nor any
          information that may infringe the rights of any third party; and you
          retain ownership of your content but you hereby grant us a limited
          licence to use, store and copy that content and to distribute and make
          it available to third parties.
        </p>

        <h1 className="ms-5">4. Privacy</h1>
        <p className="ms-5">
          Any personal data (for example, your name, address, telephone number
          or email address) that you transmit to the Site by electronic mail or
          otherwise will be used by the Carbon Trust in accordance with the
          Privacy Policy (below). You agree that any other communication or
          material you transmit to the Site, such as questions, comments,
          suggestions or the like, will be treated as non-confidential and
          non-proprietary and that the Carbon Trust can use or disclose them as
          it wishes. You hereby confirm and agree that you consent to this. If
          on registration to any of our services or products on the Site (or on
          amendment of your registration details) you provide us with an email
          address or contact details that may result in any emails we send you
          or contact we make with you being via a computer network or other
          facility provided or operated by or on behalf of your employer,
          educational establishment or other third party, then by so doing you
          are warranting that you are entitled to receive emails to that address
          and such other contacts. You also agree that we may stop sending any
          emails to such address without notifying you, even if you have
          subscribed to receive them or any other service, if we receive a
          request from your employer, educational establishment or other third
          party to stop sending emails to that address. You consent to any
          personal data submitted by you to the Carbon Trust being used by the
          Carbon Trust, and third parties and agents working on behalf of the
          Carbon Trust, for the purposes for which it was submitted and/or for
          such purposes as are explained in the Privacy Policy, and for the
          Carbon Trust and such third parties and agents to manage and
          administer the Carbon Trust's business activities and services. If you
          purchase any publications (or other items) from the Site you may
          complete your transaction using a debit card, credit card or by
          PayPal. We do not store credit card details nor do we share customer
          details with third parties.
        </p>

        <Container className="d-flex justify-content-center mb-5">
          <Row>
            <Col md={12} className="d-flex justify-content-center">
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" onChange={handleCheckboxChange} />
              </Form.Group>
            </Col>
            <Col ms={12}>
              <form onSubmit={handleSubmit}>
                <button
                  className="btn-register p-1"
                  id="btn-accept"
                  type="submit"
                >
                  Aceptar
                </button>
              </form>
            </Col>
          </Row>
        </Container>

        <div className="d-flex justify-content-center">
          <p className="fw-bold text-center">
            © Inner Visuals Trust 2024 All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
