import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactController } from "./controllers/contact.controller";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API route
  app.post('/api/contact', contactController.submitContactForm);

  // Alumni registration endpoint
  app.post('/api/alumni', async (req, res) => {
    try {
      console.log('Received alumni registration:', req.body);
      
      const alumniData = req.body;
      
      // Basic validation
      if (!alumniData.name || !alumniData.email || !alumniData.batch) {
        return res.status(400).json({ 
          error: 'Missing required fields: name, email, and batch are required' 
        });
      }

      // Here you would typically save to a database
      // For now, we'll just return success
      console.log('Alumni registration successful:', alumniData);
      
      res.status(201).json({ 
        message: 'Alumni registration submitted successfully!',
        data: alumniData 
      });
    } catch (error) {
      console.error('Alumni registration error:', error);
      res.status(500).json({ 
        error: 'Internal server error during registration' 
      });
    }
  });

  // Health check endpoint
  app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);

  return httpServer;
}