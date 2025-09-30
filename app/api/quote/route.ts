import { NextRequest, NextResponse } from 'next/server';
import { EmailService, QuoteFormData } from '@/lib/email-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données requises
    const { 
      agencyName, 
      address, 
      postalCode, 
      city, 
      firstName, 
      lastName, 
      email, 
      phone, 
      software, 
      needs 
    } = body;
    
    const requiredFields = [
      'agencyName', 'address', 'postalCode', 'city', 
      'firstName', 'lastName', 'email', 'phone', 'software', 'needs'
    ];
    
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
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

    // Validation du code postal (format français)
    const postalCodeRegex = /^\d{5}$/;
    if (!postalCodeRegex.test(postalCode)) {
      return NextResponse.json(
        { error: 'Code postal invalide (format: 5 chiffres)' },
        { status: 400 }
      );
    }

    // Préparation des données pour l'email
    const quoteData: QuoteFormData = {
      agencyName: agencyName.trim(),
      address: address.trim(),
      postalCode: postalCode.trim(),
      city: city.trim(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      software: software.trim(),
      needs: needs.trim()
    };

    // Envoi de l'email
    const result = await EmailService.sendQuoteEmail(quoteData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Votre demande de devis a été envoyée avec succès. Nous vous recontacterons rapidement.',
        emailId: result.teamEmailId
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur API quote:', error);
    
    return NextResponse.json(
      { 
        error: 'Une erreur est survenue lors de l\'envoi de votre demande. Veuillez réessayer.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
