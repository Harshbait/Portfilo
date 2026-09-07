import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Projects = () => {
  return (
    <div className="Utility flex justify-center gap-4 sm:gap-6 px-2">

      <div className="w-full max-w-[280px] sm:max-w-sm transition-transform duration-500 hover:scale-105">
        <Card
          sx={{
            width: '100%',
            backgroundColor: '#111827',
            borderRadius: 3
          }}
        >
          <CardMedia
            component="img"
            image="./wander.png"
            alt="Wander App"
            sx={{
              height: { xs: 100, sm: 150 },
              objectFit: 'cover'
            }}
          />

          <CardContent sx={{ p: { xs: 1.2, sm: 2 } }}>
            <Typography
              gutterBottom
              sx={{
                color: '#fff',
                fontSize: { xs: '0.95rem', sm: '1.2rem' },
                fontWeight: 600
              }}
            >
              Wander App
            </Typography>

            <Typography
              sx={{
                color: '#9CA3AF',
                fontSize: { xs: '0.75rem', sm: '0.9rem' },
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 3,   // limits height
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              A full-stack web application that allows users to create and manage location-based listings, upload images, add reviews, and explore locations on an interactive map. It includes secure authentication, authorization, and protected CRUD operations to ensure users can manage only their own content.
            </Typography>
          </CardContent>

          <CardActions sx={{ px: 1.5, pb: 1.5, gap: 1 }}>
            <Button
              size="small"
              sx={{ color: '#38BDF8', fontSize: '0.75rem' }}
              onClick={() =>
                window.open("https://github.com/Harshbait/wanderLust")
              }
            >
              GitHub
            </Button>

            <Button
              size="small"
              sx={{ color: '#38BDF8', fontSize: '0.75rem' }}
              onClick={() =>
                window.open("https://wanderlust-og59.onrender.com/listings")
              }
            >
              Demo
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="w-full max-w-[280px] sm:max-w-sm transition-transform duration-500 hover:scale-105">
        <Card
          sx={{
            width: '100%',
            backgroundColor: '#111827',
            borderRadius: 3
          }}
        >
          <CardMedia
            component="img"
            image="./Skillbook.png"
            alt="Skill Book"
            sx={{
              height: { xs: 100, sm: 150 },
              objectFit: 'cover'
            }}
          />

          <CardContent sx={{ p: { xs: 1.2, sm: 2 } }}>
            <Typography
              gutterBottom
              sx={{
                color: '#fff',
                fontSize: { xs: '0.95rem', sm: '1.2rem' },
                fontWeight: 600
              }}
            >
              Skill Book
            </Typography>

            <Typography
              sx={{
                color: '#9CA3AF',
                fontSize: { xs: '0.75rem', sm: '0.9rem' },
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 3,   // limits height
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              SkillBook is a full-stack MERN service marketplace that connects customers with service providers. It features JWT authentication, role-based access for customers, providers, and admins, provider approval workflows, service management, bookings, and real-time chat. The application is deployed using Vercel, Render, and MongoDB Atlas.
            </Typography>
          </CardContent>

          <CardActions sx={{ px: 1.5, pb: 1.5, gap: 1 }}>
            <Button
              size="small"
              sx={{ color: '#38BDF8', fontSize: '0.75rem' }}
              onClick={() =>
                window.open("https://github.com/Harshbait/Skillbook")
              }
            >
              GitHub
            </Button>

            <Button
              size="small"
              sx={{ color: '#38BDF8', fontSize: '0.75rem' }}
              onClick={() =>
                window.open("https://skillbook-self.vercel.app/")
              }
            >
              Demo
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
