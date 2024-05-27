import Swal from 'sweetalert2';
import './customSweetAlertVideo.css';

export const CustomSweetAlertVideoOk = (message) => {
    Swal.fire({
        icon: 'success',
        title: 'OK',
        html: `
            <div class="custom-video-icon">
            //  <img src="https://github.com/GabrielaRamos79/inner_visual_final_project/blob/mercedes/client/InnerVisual/src/assets/img/icons/IconoVideoOk.svg" />
            // </div>
            <div class="custom-video-text">
                ${message}
            </div>
            `,
        iconColor: '#00B1E2',
        confirmButtonText: 'OK',
        customClass: {
            confirmButton: 'custom-button-sw',
            title: 'custom-title',
            content: 'custom-content'
        }
    });
};

export const CustomSweetAlertVideoError = (message) => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        html: `
            <div class="custom-video-icon">
            // // <img src="https://github.com/GabrielaRamos79/inner_visual_final_project/blob/mercedes/client/InnerVisual/src/assets/img/icons/IconoVideoOk.svg" />

            </div>
            <div class="custom-video-text">
                Lo sentimos tienes que terminar de ver el video para pasar al siguiente.
            </div>
            `,
        iconColor: '#E95111',
        confirmButtonText: 'OK',
        customClass: {
            confirmButton: 'custom-button-sw',
            title: 'custom-title',
            content: 'custom-content'
        }
    });
};
