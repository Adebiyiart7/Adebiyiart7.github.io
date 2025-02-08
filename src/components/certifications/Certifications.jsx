import React from "react";

// LOCAL IMPORTS
import PageTitle from "../reusable/PageTitle";
import { styles } from "./Styles";

import AmiTechCertificate from "../../assets/certs/AmiTech_Conputer_Cert.jpg";
import Bsc_Certificate from "../../assets/certs/Bsc_Certificate.jpg";
import FullStackCert from "../../assets/certs/FullStackCert.jpg";
import FUT_Award from "../../assets/certs/FUT_Award.jpg";
import NCE_Certificate from "../../assets/certs/NCE_Certificate.jpg";
import { Grid } from "@mui/material";

const certs = [
  { id: "1", title: "Bsc Certificate", image: Bsc_Certificate },
  { id: "2", title: "NCE Certificate", image: NCE_Certificate },
  { id: "3", title: "Basic Computer Certificate", image: AmiTechCertificate },
  { id: "4", title: "Best Graduating Student(Dept.) Award", image: FUT_Award },
  { id: "5", title: "Full Stack Developer Certificate", image: FullStackCert },
];

const Certifications = () => {
  return (
    <div>
      <PageTitle title={"Certifications"} titleStyles={styles.titleStyles} />
      <p style={{ textAlign: "center" }}>Some of my achivements and awards.</p>
      <Grid container spacing={3} marginTop={2}>
        {certs.map((cert) => (
          <Grid item xs={12} sm={6}>
            <img style={{ width: "100%" }} src={cert.image} alt={cert.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Certifications;
