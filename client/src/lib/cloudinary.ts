
export interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
  format: string;
  resource_type: string;
}

export const uploadImageToCloudinary = async (file: File): Promise<string | null> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'unsigned_preset'); // You may need to create this in Cloudinary dashboard
    formData.append('cloud_name', 'ddygzamv4');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/ddygzamv4/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (response.ok) {
      const data: CloudinaryUploadResponse = await response.json();
      return data.secure_url;
    } else {
      console.error('Cloudinary upload failed:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    return null;
  }
};

// Alternative method using signed upload (more secure)
export const uploadImageToCloudinarySecure = async (file: File): Promise<string | null> => {
  try {
    // First, get signature from your backend
    const signatureResponse = await fetch('/api/cloudinary-signature', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: Math.round(Date.now() / 1000),
      }),
    });

    if (!signatureResponse.ok) {
      throw new Error('Failed to get signature');
    }

    const { signature, timestamp } = await signatureResponse.json();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('signature', signature);
    formData.append('timestamp', timestamp.toString());
    formData.append('api_key', '865455367323563');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/ddygzamv4/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (response.ok) {
      const data: CloudinaryUploadResponse = await response.json();
      return data.secure_url;
    } else {
      console.error('Cloudinary upload failed:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    return null;
  }
};
