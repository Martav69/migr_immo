import { NextRequest, NextResponse } from 'next/server';
import { EmailService, ContactFormData } from '@/lib/email-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données requises
    const { name, email, subject, message } = body;
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Préparation des données pour l'email
    const contactData: ContactFormData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: body.phone?.trim() || '',
      subject: subject.trim(),
      message: message.trim()
    };

    // Envoi de l'email
    const result = await EmailService.sendContactEmail(contactData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Votre message a été envoyé avec succès. Nous vous recontacterons rapidement.',
        emailId: result.teamEmailId
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur API contact:', error);
    
    return NextResponse.json(
      { 
        error: 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
