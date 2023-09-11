import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
Modal.setAppElement('#root');
const ErrModal = (state) => {


  return (
      <Modal isOpen = {state.disp} onRequestClose={state.close} className='w-full h-full flex items-center justify-center'>
      <div id='modal' className='w-fit h-fit shadow-dropShadow flex flex-col border-primary border-2 bg-primary py-2 px-6 rounded-lg'>
      <div className='w-full h-fit flex justify-end'> <FontAwesomeIcon icon={faClose} className='w-6 h-6 text-green hover:text-red-600 drop-shadow-md hover:shadow-white' onClick={state.close} /> </div>
      <div className='flex gap-3 items-center py-5'>
        <FontAwesomeIcon icon={faCircleExclamation}  className='w-10 h-10 text-red-600' />
        <span className="text-center font-bold font-mono text-2xl text-green">Email Not Sent !</span>
      </div>

      </div>
    </Modal>


  )
}

export default ErrModal
