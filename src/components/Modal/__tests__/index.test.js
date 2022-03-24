import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..';

const modalData =      {
    on: false,
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}


const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('Modal is rendering', () => {

    it('renders', () => {
      render(<Modal modalData={modalData} mockToggleModal={mockToggleModal} />);
    });
  })

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Modal modalData={modalData} mockToggleModal={mockToggleModal} />)
    expect(asFragment()).toMatchSnapshot()
  });


  describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            modalData={modalData}
            toggleModal={mockToggleModal}
          />);
          fireEvent.click(getByText('Close'));
          expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
  })  
