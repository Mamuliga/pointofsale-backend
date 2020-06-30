export function SettingsShape(settings: any) {
    return {
      id: settings && settings.id,
      logo: settings && settings.logo,
      companyName: settings && settings.companyName,
      address: settings && settings.address,
      email: settings && settings.email,
      phoneNo: settings && settings.phoneNo,
      description: settings && settings.description,
      openingTime: settings && settings.openingTime,
      closingTime: settings && settings.closingTime
    };
  }