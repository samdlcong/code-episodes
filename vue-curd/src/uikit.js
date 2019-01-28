import 'jquery'
import 'uikit'
import 'uikit-css'

export default (Vue, options) =>{
    const ui = window.UIkit
    Vue.prototype.$ui = {
        // $: ui.$,
        // modal: ui.modal,
        // alert: ui.modal.alert,
        // confirm: ui.modal.confirm,
        // prompt: ui.modal.prompt,
        // block: ui.modal.blockUI
    }
}