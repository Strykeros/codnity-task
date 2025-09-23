import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid
} from '@mui/material';
import { Send } from '@mui/icons-material';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (  
          <Box sx={{ width: '100%' }}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: 3,
                color: 'black'
              }}
            >
              Get In Touch
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                marginBottom: 4,
                color: 'black',
                opacity: 0.8
              }}
            >
              Have a question or want to work together? We'd love to hear from you.
            </Typography>

            <Box component="form" onSubmit={(e) => {e.preventDefault()}}>
              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Full Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}

                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: '12px',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        },
                        '&.Mui-focused': {
                          backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        }
                      }
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    name="email"
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}

                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: '12px',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        },
                        '&.Mui-focused': {
                          backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        }
                      }
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    name="subject"
                    label="Subject"
                    variant="outlined"
                    value={formData.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    helperText={errors.subject}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: '12px',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        },
                        '&.Mui-focused': {
                          backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        }
                      }
                    }}
                    
                  />
                </Grid>

                <Grid size={{ xs: 12}}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    placeholder="Tell us about your project or question..."
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: '12px',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        },
                        '&.Mui-focused': {
                          backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        }
                      }
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    startIcon={<Send />}
                    sx={{
                      minWidth: '200px',
                      height: '50px',
                      borderRadius: '25px',
                      background: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      '&:hover': {
                        background: 'rgba(0, 0, 0, 0.9)',
                        transform: 'translateY(-2px)',
                      },
                      '&:disabled': {
                        background: 'rgba(0, 0, 0, 0.3)',
                        color: 'rgba(255, 255, 255, 0.5)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
  );
};

export default ContactForm;