import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "../Card/Card";
import { CardContent } from "../Card/CardContent";
import { motion } from "framer-motion";

export default function BreakingSection() {
  const { t } = useTranslation();
  const competitions = t("breaking.competitions", { returnObjects: true }) || [];

  return (
    <div className="container py-5">
      {/* Sección Breaking */}
      <h2 className="text-center text-primary fw-bold mt-5">{t("breaking.title")}</h2>
      <div className="row g-4">
        {competitions.map((competition, index) => (
          <motion.div 
            key={index} 
            className="col-12"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="d-flex flex-row align-items-center p-3">
              <img
                src={competition.image}
                alt={competition.name}
                className="img-fluid rounded" 
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <CardContent className="ms-3">
                <h3 className="card-title text-dark">{competition.name} ({competition.year})</h3>
                <p className="card-text text-muted">{competition.description}</p>
                {competition.video && (
                  <Button variant="primary" href={competition.video} target="_blank" rel="noopener noreferrer">
                    {t("breaking.watch_video")}
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
