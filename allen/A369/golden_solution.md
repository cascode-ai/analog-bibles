# Golden Solution - A369

## Reference answer

Upper limit $V_{DD} - V_{SD4}(sat) + V_{T1} = 1.5 - 0.2 - 0.5 = 0.8$ V; lower limit $V_{DS3}(sat) + V_{T1} + V_{DS1}(sat) = 0.2 - 0.5 + 0.2 = -0.1$ V (below ground). Within the rails the ICMR is 0 to 0.8 V, i.e. 0.8 V.

- The negative threshold shifts the whole range down by 0.5 V compared with a 0-V native input (0.4–1.3 V); the lower limit now passes below the negative rail, and the in-rail range is clipped at 0 V.

## Grading notes

+2: limits 0.8 V and −0.1 V and the in-rail ICMR 0.8 V (0 to 0.8 V). +1: correct limits but the in-rail range given as 0.9 V (not clipped at ground), or a single slip. 0: one limit right. −2 (asserted as fact): threshold sign handled wrongly (e.g. upper limit 2.3 V or 1.8 V), or an ICMR extending above $V_{DD}$.
