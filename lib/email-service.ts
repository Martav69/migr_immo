import { Resend } from 'resend';

// Initialisation du client Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Types pour les données des formulaires
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface QuoteFormData {
  // Info de l'agence
  agencyName: string;
  address: string;
  postalCode: string;
  city: string;
  // Info du contact référent
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // Votre demande
  software: string;
  needs: string;
}

// Template HTML pour les emails de contact
const createContactEmailTemplate = (data: ContactFormData) => `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouveau message de contact - Migr</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #5EE1A9, #B39849); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #5EE1A9; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #5EE1A9; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Nouveau message de contact</h1>
        <p>Formulaire de contact - Site Migr</p>
    </div>
    <div class="content">
        <div class="field">
            <div class="label">Nom complet :</div>
            <div class="value">${data.name}</div>
        </div>
        <div class="field">
            <div class="label">Email :</div>
            <div class="value">${data.email}</div>
        </div>
        ${data.phone ? `
        <div class="field">
            <div class="label">Téléphone :</div>
            <div class="value">${data.phone}</div>
        </div>
        ` : ''}
        <div class="field">
            <div class="label">Sujet :</div>
            <div class="value">${data.subject}</div>
        </div>
        <div class="field">
            <div class="label">Message :</div>
            <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
        </div>
    </div>
    <div class="footer">
        <p>Ce message a été envoyé depuis le formulaire de contact du site Migr</p>
        <p>Réponse recommandée sous 24h</p>
    </div>
</body>
</html>
`;

// Template HTML pour les emails de devis
const createQuoteEmailTemplate = (data: QuoteFormData) => `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouvelle demande de devis - Migr</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #5EE1A9, #B39849); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .section { margin-bottom: 30px; }
        .section-title { font-size: 18px; font-weight: bold; color: #5EE1A9; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #5EE1A9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #333; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #5EE1A9; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Nouvelle demande de devis</h1>
        <p>Formulaire de devis - Site Migr</p>
    </div>
    <div class="content">
        <div class="section">
            <div class="section-title">Informations de l'agence</div>
            <div class="field">
                <div class="label">Nom de l'agence :</div>
                <div class="value">${data.agencyName}</div>
            </div>
            <div class="field">
                <div class="label">Adresse :</div>
                <div class="value">${data.address}</div>
            </div>
            <div class="field">
                <div class="label">Code postal :</div>
                <div class="value">${data.postalCode}</div>
            </div>
            <div class="field">
                <div class="label">Ville :</div>
                <div class="value">${data.city}</div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Contact référent</div>
            <div class="field">
                <div class="label">Prénom :</div>
                <div class="value">${data.firstName}</div>
            </div>
            <div class="field">
                <div class="label">Nom :</div>
                <div class="value">${data.lastName}</div>
            </div>
            <div class="field">
                <div class="label">Email :</div>
                <div class="value">${data.email}</div>
            </div>
            <div class="field">
                <div class="label">Téléphone :</div>
                <div class="value">${data.phone}</div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Demande</div>
            <div class="field">
                <div class="label">Logiciel actuellement utilisé :</div>
                <div class="value">${data.software}</div>
            </div>
            <div class="field">
                <div class="label">Description des besoins :</div>
                <div class="value">${data.needs.replace(/\n/g, '<br>')}</div>
            </div>
        </div>
    </div>
    <div class="footer">
        <p>Cette demande a été envoyée depuis le formulaire de devis du site Migr</p>
        <p>Réponse recommandée sous 24h</p>
    </div>
</body>
</html>
`;

// Template de confirmation pour le client
const createConfirmationEmailTemplate = (type: 'contact' | 'quote', data: ContactFormData | QuoteFormData) => `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmation de votre demande - Migr</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #5EE1A9, #B39849); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .cta { background: #5EE1A9; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Merci pour votre demande !</h1>
        <p>Nous avons bien reçu votre ${type === 'contact' ? 'message' : 'demande de devis'}</p>
    </div>
    <div class="content">
        <p>Bonjour ${type === 'contact' ? (data as ContactFormData).name : `${(data as QuoteFormData).firstName} ${(data as QuoteFormData).lastName}`},</p>
        
        <p>Nous avons bien reçu votre ${type === 'contact' ? 'message de contact' : 'demande de devis'} et nous vous remercions de votre confiance.</p>
        
        <p>Notre équipe d'experts va examiner votre demande et vous recontactera dans les plus brefs délais (sous 24h en général).</p>
        
        <p>En attendant, n'hésitez pas à nous contacter directement :</p>
        <ul>
            <li><strong>Téléphone :</strong> 06 95 05 85 81</li>
            <li><strong>Email :</strong> contact@migr-immobilier.fr</li>
        </ul>
        
        <p>Cordialement,<br>L'équipe Migr</p>
    </div>
    <div class="footer">
        <p>Migr - Services professionnels pour syndics</p>
        <p>Vos données sont traitées de manière confidentielle</p>
    </div>
</body>
</html>
`;

// Service principal pour l'envoi d'emails
export class EmailService {
  // Envoyer un email de contact
  static async sendContactEmail(data: ContactFormData) {
    try {
      // Email vers l'équipe Migr
      const teamEmail = await resend.emails.send({
        from: 'onboarding@resend.dev', // Domaine Resend pour les tests
        to: ['martav69200@gmail.com'], // Email de test
        subject: `Nouveau message de contact - ${data.subject}`,
        html: createContactEmailTemplate(data),
        replyTo: data.email,
      });

      // Email de confirmation vers le client
      const confirmationEmail = await resend.emails.send({
        from: 'onboarding@resend.dev', // Domaine Resend pour les tests
        to: [data.email],
        subject: 'Confirmation de votre message - Migr',
        html: createConfirmationEmailTemplate('contact', data),
      });

      return { success: true, teamEmailId: teamEmail.data?.id, confirmationEmailId: confirmationEmail.data?.id };
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email de contact:', error);
      throw new Error('Erreur lors de l\'envoi de l\'email');
    }
  }

  // Envoyer un email de devis
  static async sendQuoteEmail(data: QuoteFormData) {
    try {
      // Email vers l'équipe Migr
      const teamEmail = await resend.emails.send({
        from: 'onboarding@resend.dev', // Domaine Resend pour les tests
        to: ['martav69200@gmail.com'], // Email de test
        subject: `Nouvelle demande de devis - ${data.agencyName}`,
        html: createQuoteEmailTemplate(data),
        replyTo: data.email,
      });

      // Email de confirmation vers le client
      const confirmationEmail = await resend.emails.send({
        from: 'onboarding@resend.dev', // Domaine Resend pour les tests
        to: [data.email],
        subject: 'Confirmation de votre demande de devis - Migr',
        html: createConfirmationEmailTemplate('quote', data),
      });

      return { success: true, teamEmailId: teamEmail.data?.id, confirmationEmailId: confirmationEmail.data?.id };
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email de devis:', error);
      throw new Error('Erreur lors de l\'envoi de l\'email');
    }
  }
}
