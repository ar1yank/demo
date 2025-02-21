import React, { useState, useEffect } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function Comp() {
  const reportId = 'b397514f-ec03-43d6-8b2a-b3175c6d8ed4';
  const workspaceId ='me';
  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImltaTBZMnowZFlLeEJ0dEFxS19UdDVoWUJUayIsImtpZCI6ImltaTBZMnowZFlLeEJ0dEFxS19UdDVoWUJUayJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTRkOThkZDItOTE5OS00MmU1LWJhOGItZGEzZTc2M2VkZTJlLyIsImlhdCI6MTc0MDExMDcwOSwibmJmIjoxNzQwMTEwNzA5LCJleHAiOjE3NDAxMTU2NDQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWlFBYS84WkFBQUFPSE9oK2JaQm9JK3ZlMTlleVdhTVd4b2lLUVJkbW9wdGxoOTlDWFF2YW5HS1dNTHJKQzd5QlNySWMrSXZrTVJxbnNoOTV1UnlhTWRpZmIyemtQQk13RVpSRFJyTERYWEdTVU01SHRYeVlFTDR5ZWo2WE0vcUVCQVcwL0I0c0Fjd0NYMldPOVRFSU44M0dYU0JQZUN2K09DeWIzYmF5MzdSRFd3MkJWUFRXbXVXSG9nR0w0ckVlVlV0VllyU2ViWVgiLCJhbXIiOlsicnNhIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZGV2aWNlaWQiOiJlMTM1NmM3Yy0wOGZlLTRmMGQtYmUzYy05YjhhMzU3NzUxMzgiLCJmYW1pbHlfbmFtZSI6IlNpbmdoIiwiZ2l2ZW5fbmFtZSI6Ikd1cnByZWV0IiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMmEwOTpiYWM1OjNjZGQ6MWFhYTo6MmE4OjUiLCJuYW1lIjoiR3VycHJlZXQgU2luZ2ggfCBNQVEgU29mdHdhcmUiLCJvaWQiOiI3NDUzYmQ1MS1iMmJjLTQ3NDgtODBkMi00M2M2OTE2ZDU1ODAiLCJwdWlkIjoiMTAwMzIwMDNDNjZDRTk2MiIsInJoIjoiMS5BUWNBMG8zWjVKbVI1VUs2aTlvLWRqN2VMZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQUhBRmNIQUEuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lkIjoiMDAxM2I2ZjktYzFkZi1hMDY3LTBlZmQtMDE3NTQ5ZTlmOGI2Iiwic2lnbmluX3N0YXRlIjpbImR2Y19tbmdkIiwiZHZjX2NtcCIsImttc2kiXSwic3ViIjoiRjFPT0hCUFRQZmZJbC1vS0FqTHQyV1FYbGNldFJWU3E0QkZCVDU0dWNqZyIsInRpZCI6ImU0ZDk4ZGQyLTkxOTktNDJlNS1iYThiLWRhM2U3NjNlZGUyZSIsInVuaXF1ZV9uYW1lIjoiZ3VycHJlZXRzQG1hcXNvZnR3YXJlLmNvbSIsInVwbiI6Imd1cnByZWV0c0BtYXFzb2Z0d2FyZS5jb20iLCJ1dGkiOiJ2TWRPQjNtZkRrU1FTYWNVU1NZTEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2lkcmVsIjoiMSA0In0.ElFdTD6mbyp-6PgmUkycKAulMoP50xTgmWoRAeiFDWARxJcJhcmEu-15Y3-rK90SYyh5kV3a3igiRI_vuE6gpXsWGiRFRc14Ev2Kz6tE7Gx-S3uFJMvo9au18ZP4sRQDqd53HwWWmTteSQbSGARKpkzD5dbWj-vGrNF2etS8ocehFKvghxczRuawVPztABCEpM9QLTcHqJ_VkmFCAg8W81fxm0H63h6HpJ40Biur29o5iTnh05a5NR0o6HcI9YFvaFUgHrtTYyD8M9R3wSuiI6ROQ8Vz6PulBnCsOf48IQo78__MiEUkQtMOBHyTBjMS8jhLR1iy3qoGx9ILfHK_Lw';

  // Expanded language support
  const supportedLanguages = {
    'en': 'en-EN',    // English
    'de': 'de-DE',    // German
    'ja': 'ja-JP',    // Japanese
    'fr': 'fr-FR',    // French
    'es': 'es-ES',    // Spanish
    'it': 'it-IT',    // Italian
    'pt': 'pt-PT',    // Portuguese
    'nl': 'nl-NL',    // Dutch
    'ru': 'ru-RU',    // Russian
    'ko': 'ko-KR',    // Korean
    'zh': 'zh-CN',    // Chinese (Simplified)
    'ar': 'ar-SA',    // Arabic
    'hi': 'hi-IN',    // Hindi
    'tr': 'tr-TR',    // Turkish
    'pl': 'pl-PL',    // Polish
    'vi': 'vi-VN',    // Vietnamese
    'th': 'th-TH',    // Thai
    'sv': 'sv-SE',    // Swedish
    'da': 'da-DK',    // Danish
    'fi': 'fi-FI'     // Finnish
  };

  const [lang, setLang] = useState('en-EN');

  useEffect(() => {
    const detectUserLanguage = () => {
      // Try different methods to detect user's language
      const userLanguages = [
        navigator.language,                     // Browser language
        ...navigator.languages || [],           // User's preferred languages
        Intl.DateTimeFormat().resolvedOptions().locale  // System locale
      ];

      // Get the base language code (e.g., 'en' from 'en-US')
      const baseLanguage = userLanguages[0].split('-')[0].toLowerCase();

      // Set the language based on supported languages or fall back to English
      const detectedLanguage = supportedLanguages[baseLanguage] || 'en-EN';
      setLang(detectedLanguage);
    };

    detectUserLanguage();

    // Listen for system language changes
    window.addEventListener('languagechange', detectUserLanguage);

    // Cleanup listener
    return () => {
      window.removeEventListener('languagechange', detectUserLanguage);
    };
  }, []);

  const embedConfig = {
    type: 'report',
    id: reportId,
    embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${reportId}&groupId=${workspaceId}&language=${lang}`,
    accessToken: accessToken,
    tokenType: models.TokenType.Aad,
    settings: {
      panes: {
        filters: {
          expanded: false,
          visible: false,
        },
      },
      background: models.BackgroundType.Transparent,
    },
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        padding: 0,
      }}
    >
      <div style={{ width: '100%', height: '100%' }}>
        <PowerBIEmbed
          className="powerbiembeddedcomponent"
          id="embeddedComponentReport"
          embedConfig={embedConfig}
          cssClassName="reportClass"
          getEmbeddedComponent={async (embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </div>
    </div>
  );
}

export default Comp;