
import crypto from 'crypto';

const CLOUDINARY_API_SECRET = 'K3Tl1-sCKXUo7pOWLRexJuQk9DU';

export const generateCloudinarySignature = (timestamp: number): string => {
  const params = `timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;
  return crypto.createHash('sha1').update(params).digest('hex');
};

export const createCloudinarySignatureEndpoint = (req: any, res: any) => {
  try {
    const { timestamp } = req.body;
    
    if (!timestamp) {
      return res.status(400).json({ error: 'Timestamp is required' });
    }

    const signature = generateCloudinarySignature(timestamp);
    
    res.json({
      signature,
      timestamp,
      api_key: '865455367323563',
    });
  } catch (error) {
    console.error('Error generating Cloudinary signature:', error);
    res.status(500).json({ error: 'Failed to generate signature' });
  }
};
