export function SalesShape(dailySales: any) {
  if (dailySales) {
    return {
      saleSummary: dailySales[0],
      dateRange: dailySales[1],
      sales: dailySales[2],
    };
  } else {
    return {};
  }
}

export function TotalCountShape(totalCountOfEntries: any){
  if (totalCountOfEntries) {
    return {
      salesCount: totalCountOfEntries[0],
      itemsCount: totalCountOfEntries[1],
      customersCount: totalCountOfEntries[2],
      suppliersCount: totalCountOfEntries[3],
      employeesCount: totalCountOfEntries[4],
    };
  } else {
    return {};
  }
}
