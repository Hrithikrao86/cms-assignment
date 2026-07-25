import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Heading = styled.h1`
  font-size: 34px;
  color: #1f2937;
`;

export const CreateButton = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  padding: 12px 22px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #1d4ed8;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 14px 18px;
  margin-bottom: 25px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

export const TableContainer = styled.div`
  background: white;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0,0,0,.08);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background: #f9fafb;
  padding: 18px;
  text-align: left;
`;

export const Td = styled.td`
  padding: 18px;
  border-top: 1px solid #e5e7eb;
`;

export const Status = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
`;