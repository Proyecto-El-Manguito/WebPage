import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { Title } from "../../components/titleComponents/Title";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  function validate(form) {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!form.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Correo electrónico inválido.";
    }
    if (!form.subject.trim()) newErrors.subject = "El asunto es obligatorio.";
    if (!form.message.trim()) newErrors.message = "El mensaje es obligatorio.";
    // Teléfono opcional, pero puedes validar formato si lo deseas:
    if (form.phone && !/^[\d+\-\s()]{7,20}$/.test(form.phone))
      newErrors.phone = "Número de teléfono inválido.";

    return newErrors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="section" className="">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="subtitle1" className="mb-24 text-gray-700">
          ¿Tienes preguntas sobre la Cooperativa El Manguito? Déjanos tus datos
          y te responderemos a la brevedad.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-6 bg-white rounded-3xl p-8 md:p-12"
        >
          <TextField
            fullWidth
            required
            label="Nombre completo"
            name="name"
            variant="outlined"
            value={formData.name}
            error={Boolean(errors.name)}
            helperText={errors.name}
            onChange={handleChange}
            InputProps={{ className: "bg-gray-100" }}
          />

          <TextField
            fullWidth
            required
            label="Correo electrónico"
            name="email"
            variant="outlined"
            type="email"
            value={formData.email}
            error={Boolean(errors.email)}
            helperText={errors.email}
            onChange={handleChange}
            InputProps={{ className: "bg-gray-100" }}
          />

          <TextField
            fullWidth
            label="Teléfono (opcional)"
            name="phone"
            variant="outlined"
            value={formData.phone}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            onChange={handleChange}
            InputProps={{ className: "bg-gray-100" }}
          />

          <TextField
            fullWidth
            required
            label="Asunto"
            name="subject"
            variant="outlined"
            value={formData.subject}
            error={Boolean(errors.subject)}
            helperText={errors.subject}
            onChange={handleChange}
            InputProps={{ className: "bg-gray-100" }}
          />

          <TextField
            fullWidth
            required
            label="Mensaje"
            name="message"
            variant="outlined"
            multiline
            rows={5}
            value={formData.message}
            error={Boolean(errors.message)}
            helperText={errors.message}
            onChange={handleChange}
            InputProps={{ className: "bg-gray-100" }}
          />

          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              color="secondary"
              className="px-10 py-3 rounded-full shadow-md"
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "ENVIAR MENSAJE"
              )}
            </Button>
          </div>

          {status === "success" && (
            <Alert severity="success">Mensaje enviado correctamente.</Alert>
          )}
          {status === "error" && (
            <Alert severity="error">Ocurrió un error. Intenta más tarde.</Alert>
          )}
        </Box>
      </motion.div>
    </Box>
  );
};

export default ContactSection;
