const ServiceLevelAgreement = () => {
  return (
    <div className="p-8 mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-primaryColor text-center mb-4 ">
        Service Level Agreement (SLA) for Allround Security Service LIMITED
        (ASSL)
      </h1>
      <p>
        This Service Level Agreement (SLA) outlines the services provided by
        Allround Security Service LIMITED (ASSL) and the terms under which these
        services will be provided.
      </p>

      <h2 className="text-xl font-semibold text-primaryColor my-4">
        1. Purpose
      </h2>
      <p>
        The purpose of this SLA is to ensure that the necessary services are
        provided consistently and to meet the agreed-upon standards of service
        quality.
      </p>

      <h2 className="text-xl font-semibold text-primaryColor my-4">
        2. Scope of Services
      </h2>
      <p>ASSL agrees to provide the following services under this SLA:</p>
      <ul className="list-disc ml-6">
        <li>Security personnel services</li>
        <li>Executive protection services</li>
        <li>Risk assessment and management</li>
        <li>Consultation services on security protocols</li>
        <li>Emergency response services</li>
      </ul>

      <h2 className="text-xl font-semibold text-primaryColor my-4">
        3. Service Availability
      </h2>
      <p>
        ASSL commits to providing services 24/7, ensuring that trained security
        personnel are available to meet client needs at all times.
      </p>

      <h2 className="text-xl font-semibold text-primaryColor my-4">
        4. Service Response Time
      </h2>
      <p>
        ASSL aims to respond to service requests within the following
        timeframes:
      </p>
      <ul className="list-disc ml-6">
        <li>Emergency response: within 15 minutes</li>
        <li>Non-emergency requests: within 1 hour</li>
      </ul>

      <h2 className="text-xl font-semibold text-primaryColor my-4">
        5. Performance Monitoring
      </h2>
      <p>
        ASSL will monitor performance against the service level commitments
        outlined in this SLA. Performance metrics will be reviewed quarterly.
      </p>

      <h2 className="text-xl font-semibold text-primaryColor my-4">
        6. Client Responsibilities
      </h2>
      <p>
        Clients are expected to provide ASSL with timely access to facilities
        and any necessary information required for the execution of services.
      </p>

      <h2 className="text-xl font-semibold text-primaryColor my-4">
        7. Review and Revisions
      </h2>
      <p>
        This SLA will be reviewed annually, and any necessary changes will be
        made in consultation with the client to ensure it remains relevant and
        effective.
      </p>

      <h2 className="text-xl font-semibold text-primaryColor my-4">
        8. Contact Information
      </h2>
      <p>
        For any inquiries or further information regarding this SLA, please
        contact us at{" "}
        <a href="mailto:info@allroundbd.com" className="text-blue-600">
          info@allroundbd.com
        </a>
        .
      </p>
    </div>
  );
};

export default ServiceLevelAgreement;
