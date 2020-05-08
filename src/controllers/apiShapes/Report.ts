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
