import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

export default function BasicModal({ open, onClose, selectedProduct }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => onClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { xs: "80vw", md: 400 }, // 80% en mobile, 400px en md y arriba
          }}
        >
          <div
            className="w-full h-48 bg-cover bg-center rounded-lg mb-4"
            style={{ backgroundImage: `url(${selectedProduct?.imagen})` }}
          />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-lg font-semibold text-center"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            {selectedProduct?.texto?.toUpperCase()}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: "normal",
              textAlign: "center",
            }}
          >
            {selectedProduct?.descripcion}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
