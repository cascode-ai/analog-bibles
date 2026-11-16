# Golden Solution - A539

## Reference answer

$3.5 \le A \le 4.5$, i.e. a tolerance of ±12.5 %.

- $v_{in}(2) = A\,r$ with the stage-1 residue $r = v_{in}(1) - (b_0/2 + b_1/4)V_{REF}$, which lies in $0 \le r < V_{REF}/4$.
- Deviation from the ideal: $|A r - 4r| = |\Delta A|\,r \le |\Delta A|\,V_{REF}/4$ (largest at the top of each subrange).
- Requirement: $|\Delta A|\,V_{REF}/4 \le V_{REF}/8$ → $|\Delta A| \le 0.5$, so $A_{max} = 4.5$, $A_{min} = 3.5$, and $\Delta A/A = \pm 0.5/4 = \pm 12.5\,\%$.
- With $V_{REF}$ = 1 V: $|\Delta A| \times 0.25\ \mathrm{V} \le 0.125$ V.

## Grading notes

+2: $A_{max} = 4.5$, $A_{min} = 3.5$, ±12.5 %, from the maximum residue $V_{REF}/4$ and the $V_{REF}/8$ limit. +1: correct tolerance with the extreme values not stated, or a minor slip. 0: correct method but the maximum residue taken as $V_{REF}/2$ or $V_{REF}$ (giving ±6.25 % or ±3.1 %) with reasoning shown; or an analysis by transition positions (giving about 3.43 ≤ A ≤ 4.8) that ignores the stated criterion. −2 (asserted as fact): tolerance derived from the wrong limit (e.g., one full stage-2 LSB, ±25 %) or another wrong value presented as the answer to the stated criterion.
