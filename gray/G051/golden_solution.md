# Golden Solution - G051

## Reference answer

The gross-die curves are straight lines of slope −1 on the log-log plot: $N = K/A$, with $K$ ≈ usable wafer area ≈ $1.2\times10^7$ mil² (4-inch), ≈ $4.7\times10^7$ mil² (8-inch), ≈ $1.1\times10^8$ mil² (12-inch). With the cost per good unit $C = \dfrac{C_w}{NY_{ws}Y_{df}Y_{ft}} + \dfrac{C_p}{Y_{ft}}$:
$$\frac{C}{A} = \frac{C_w\,e^{A/A_0}}{K\,Y_{df}Y_{ft}} + \frac{C_p}{Y_{ft}\,A}$$
- Process A: $\dfrac{C}{A} = \dfrac{C_w e^{A/37{,}000}}{KY_{df}Y_{ft}} + \dfrac{C_p}{Y_{ft}A}$; process B: same with $e^{A/20{,}000}$; process C: $e^{A/12{,}000}$ ($A$ in mil², $K$ in mil², result per mil²; for a 4-inch wafer $K = 1.2\times10^7$).
- Interpretation: the second (package-limited) term falls as $1/A$, the first (die-cost-limited) term rises exponentially, so the cost per unit area has a minimum where $A^2e^{A/A_0} = C_pKY_{df}A_0/C_w$ — at a larger die size for a higher-yield process (larger $A_0$) or higher packaging cost. (Example: $C_w = 100$ USD, $C_p = 1$ USD, $Y_{df} = 0.9$, $Y_{ft} = 0.8$, 4-inch: minima near 38k, 25k and 17k mil² for A, B, C.)

## Grading notes

+2: $N \propto 1/A$ from the slope −1 lines with a constant ≈ wafer area (4-inch ≈ 1.1–1.3×10⁷ mil², or the general $K$), the cost expression $C/A = C_we^{A/A_0}/(KY_{df}Y_{ft}) + C_p/(Y_{ft}A)$ (or an equivalent form), and the three process-specific versions with their $A_0$. Locating the minimum is a plus, not required. +1: correct expression with $C_p$ not divided by $Y_{ft}$, or with only the general form and no process-specific $A_0$ substitution. 0: total cost per unit right but not converted to per unit area, or $N$ treated as constant. −2 (asserted as fact): $Y_{ws}$ placed in the numerator, $N \propto A$, or a result in which the cost per unit area decreases monotonically with die size. The question does not tie a wafer diameter to a process: keeping a general $K$, using one diameter for all three processes, or assigning a diameter to each process as a stated assumption (with $K$ read from that curve) are all acceptable and not a false claim.
