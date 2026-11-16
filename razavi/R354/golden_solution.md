# Golden Solution - R354

## Reference answer

$$\overline{V_{n,in}^2} = 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3} + g_{m5}}{g_{m1}^2}\right) = 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{1.5\,g_{m5}}{g_{m1}^2}\right)$$

- KCL at the two drain nodes and subtraction give $(g_{m5} - g_{m3})(V_A - V_B) = (I_{nA} - I_{nB}) - (I_{n1} - I_{n2}) - g_{m1}V_{in}$, where $I_{nA} = I_{n5} + I_{n3}$, $I_{nB} = I_{n6} + I_{n4}$ are the load noise currents at the two nodes. The tail node cancels for the differential quantity.
- Differential gain $g_{m1}/(g_{m5} - g_{m3}) = 2g_{m1}/g_{m5}$; the load conductance cancels when referring to the input, so each load noise current is divided by $g_{m1}$.
- Four load devices ($2 \times 4kT\gamma(g_{m3} + g_{m5})$) and two input devices ($2 \times 4kT\gamma g_{m1}$) give the result. The cross-coupled pair raises the gain but adds noise.

## Grading notes

+2: expression equivalent to the reference (with $g_{m3} = 0.5g_{m5}$ substituted or not), counting all six transistors and the factor 2 for the differential pair. +1: correct structure with one slip (e.g., the cross-coupled devices omitted, giving $8kT\gamma(1/g_{m1} + g_{m5}/g_{m1}^2)$). 0: single-ended (half) result without the factor 2 but otherwise right. -2 (asserted as fact): the cross-coupled devices claimed to cancel the diode-load noise (e.g., a load term $\propto g_{m5} - g_{m3}$), the tail source said to add differential noise, or the load noise referred with a gain other than the $g_{m1}$ short-circuit transconductance so that the result changes.
