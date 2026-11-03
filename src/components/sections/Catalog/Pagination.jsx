import { PaginationContainer, PageButton } from './Pagination.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null; // Solo se muestra si hay más de una página

  return (
    <PaginationContainer>
      <PageButton 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon icon={faChevronLeft} /> Anteriores
      </PageButton>

      {Array.from({ length: totalPages }, (_, index) => {
        const pageNum = index + 1;
        return (
          <PageButton
            key={pageNum}
            $active={pageNum === currentPage}
            onClick={() => onPageChange(pageNum)}
          >
            {pageNum}
          </PageButton>
        );
      })}

      <PageButton 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Siguientes <FontAwesomeIcon icon={faChevronRight} />
      </PageButton>
    </PaginationContainer>
  );
};
