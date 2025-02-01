import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "../Card/Card";
import { CardContent } from "../Card/CardContent";

export default function CircoSection() {
  const { t } = useTranslation();
  const festivals = t("circo.festivals", { returnObjects: true }) || [];

  return (
    <div className="container py-5">
      <h2 className="text-center text-danger fw-bold mb-4">{t("circo.title")}</h2>
      <div className="row g-4">
        {festivals.map((festival, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <Card className="h-100">
              <img
                src={festival.image}
                alt={festival.name}
                className="card-img-top"
              />
              <CardContent>
                <h3 className="card-title text-dark">{festival.name}</h3>
                <p className="card-text text-muted">{festival.description}</p>
                <Button variant="danger" href={festival.url} target="_blank" rel="noopener noreferrer">
                  {t("circo.see_more")}
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
