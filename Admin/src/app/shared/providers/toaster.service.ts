import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({ providedIn: 'root' })
export class ToasterService {
  constructor() {}

  error = (error?: string) => {
    if (!error) {
      error = 'Une erreur s\'est produite pendant le traitement';
    }
    this.showNotification(error, 'danger');
  };
  success = (success?: string) => {
    if (!success) {
      success = 'Traitement réussi avec succès';
    }
    this.showNotification(success, 'success');
  };
  warning(warn: string) {
    this.showNotification(warn, 'warning');
  }
  info(info: string) {
    this.showNotification(info, 'info');
  }

  showNotification(message, type?, from?, align?) {
    if (!type) {
      type = 'info';
    }
    if (!from) {
      from = 'top';
    }
    if (!align) {
      align = 'right';
    }
    $.notify(
      {
        icon: 'notifications',
        message: message
      },
      {
        type: type,
        timer: 1500,
        z_index: 30000,
        placement: {
          from: from,
          align: align
        }
      }
    );
  }
}
