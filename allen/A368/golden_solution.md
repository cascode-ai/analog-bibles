# Golden Solution - A368

## Reference answer

$V_{icm}(\text{upper}) = V_{DD} - V_{SD4}(sat) + V_{T1}$; $V_{icm}(\text{lower}) = V_{DS3}(sat) + V_{GS1} = V_{DS3}(sat) + V_{T1} + V_{DS1}(sat)$. With the numbers: 1.3 V and 0.4 V, so the ICMR is 0.4–1.3 V, i.e. 0.9 V.

- Upper: the drain of M1 is held at the folding node $V_{DD} - V_{SD4}(sat)$ (M4 at the edge of saturation); M1 stays saturated while $V_{D1} \ge v_{icm} - V_{T1}$, giving $1.5 - 0.2 + 0 = 1.3$ V.
- Lower: the tail M3 needs $V_{DS3}(sat)$ and M1 needs $V_{GS1} = V_{T1} + V_{DS1}(sat)$: $0.2 + 0 + 0.2 = 0.4$ V.
- Both limits are inside the rails, so ICMR = 0.9 V, roughly centered in the 1.5-V supply. (With standard 0.5-V input devices it would be 0.9 V to 1.5 V, only 0.6 V.)

## Grading notes

+2: both expressions and the numbers 1.3 V and 0.4 V (ICMR 0.9 V). +1: correct expressions with one numeric slip, or the numbers right with the expressions only implied. 0: one limit right, the other missing. −2 (asserted as fact): the upper limit written as $V_{DD} - V_{SG4}$-type (current-mirror-load) expression, the 0.5-V threshold used for M1/M2, or an ICMR beyond the rails reported as the in-rail range.
