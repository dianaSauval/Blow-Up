import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "../Card/Card";
import { CardContent } from "../Card/CardContent";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.private_classes"),
      description: t("services.private_classes_desc"),
      image: "https://example.com/private-classes.jpg",
    },
    {
      title: t("services.performances"),
      description: t("services.performances_desc"),
      image: "https://example.com/performances.jpg",
    },
    {
      title: t("services.workshops"),
      description: t("services.workshops_desc"),
      image: "https://example.com/workshops.jpg",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center text-danger fw-bold mb-3">{t("services.title")}</h2>
      <p className="text-center text-muted mb-5">{t("services.subtitle")}</p>
      <div className="row g-4">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="col-12 col-md-4"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="text-center border-0 shadow-lg rounded-4 overflow-hidden exotic-card position-relative">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-100 object-fit-cover"
                style={{ height: "250px" }}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <CardContent className="p-4 bg-white position-absolute bottom-0 start-50 translate-middle-x w-100">
                <h3 className="card-title text-dark fw-bold">{service.title}</h3>
                <p className="card-text text-muted">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
