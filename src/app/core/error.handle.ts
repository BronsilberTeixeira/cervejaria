import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, NgZone } from "@angular/core";
import { SnackbarService } from "../shared/services/snackbar.service";

export class ApplicationErrorHandler extends ErrorHandler {
    constructor(private zone: NgZone, private _snackBar: SnackbarService) {
        super()
    }

    hendleError(errorResponse: any) {
        super.handleError(errorResponse);

        if(ErrorHandler instanceof HttpErrorResponse) {
            const message = !!errorResponse.error ? errorResponse.error.message : null;
            const errorDescription = errorResponse.error ? errorResponse.error.error_description : null;

            this.zone.run(() => {
                switch (errorResponse.status) {
                    case 400:
                      this._handle400(errorDescription, message);
                      break;
                    case 401:
                      this._handle401(errorDescription);
                      break;
                    case 403:
                      this._snackBar.openError(
                        message || 'Você não possui permissão para executar esta ação'
                      );
                      break;
                    case 404:
                      this._snackBar.openError(message || 'O recurso não foi encontrado');
                      break;
                    case 500:
                      this._handle500(message || 'Ocorreu um erro!');
                      break;
                    default:
                      this._snackBar.openError(message || 'Ocorreu um erro!');
                  }
            });
        }
    }

    private _handle500(message: string): void {
        this._snackBar.openError(message);
      }
    
      private _handle400(errorDescription400: string, message: string): void {
        if (
          !!errorDescription400 &&
          errorDescription400.includes('Usu&aacute;rio inexistente ou senha inv&aacute;lida')
        ) {
          this._snackBar.openError('Usuário e/ou senha inválida');
        } else {
          this._snackBar.openError(message || 'Ocorreu um erro!');
        }
      }
    
      private _handle401(errorDescription401: string): void {
        if (!!errorDescription401 && errorDescription401.includes('Invalid refresh token (expired)')) {
          // this.tokenService.clearAccessToken();
          // this.navService.navigateTo(['login']);
        }
      }
}