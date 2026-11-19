# Golden Solution - R001

## Reference answer

With $W/L=100$ and $V_{SB}=0$, the thresholds are 0.7 V (NFET) and $-0.8$ V (PFET). The largest overdrives are 2.3 V and 2.2 V, both below $|V_{DS}|=3$ V. Thus each device is cut off below threshold and saturated wherever conducting.

The square-law saturation model gives
$$
|I_D|=\tfrac12\mu C_{ox}(W/L)(|V_{GS}|-|V_{TH}|)^2(1+\lambda|V_{DS}|).
$$
Let $x=|V_{GS}|$ and $[z]_+=\max(z,0)$. Without channel-length modulation (CLM),
$$
I_{D,n}=(6.70\ \mathrm{mA/V^2})[x-0.7\ \mathrm V]_+^2,\qquad
|I_{D,p}|=(1.92\ \mathrm{mA/V^2})[x-0.8\ \mathrm V]_+^2,
$$
where the coefficients are $\tfrac12(134\ \mu\mathrm{A/V^2})(100)$ and $\tfrac12(38.4\ \mu\mathrm{A/V^2})(100)$. With CLM, multiply by $1+0.1(3)=1.3$ and $1+0.2(3)=1.6$, respectively.

Both curves start from zero with zero slope at their respective thresholds and rise parabolically. At $x=3$ V:

| Model | NFET | PFET magnitude |
|---|---|---|
| Without CLM | $6.70(3-0.7)^2=35.4$ mA | $1.92(3-0.8)^2=9.29$ mA |
| With CLM | $1.3(35.443)=46.1$ mA | $1.6(9.2928)=14.9$ mA |

![Drain current magnitudes, thresholds and endpoints, with and without CLM](/q/R001/solution-curves.svg)

## Grading notes

+2: actual curves start at the correct gate-voltage magnitudes ($|V_{GS}|=0.7$ V for NFET and 0.8 V for PFET), rise parabolically and remain saturated wherever conducting. Endpoint current magnitudes at $|V_{GS}|=3$ V are within ±5% of either consistent convention: 35.4 mA and 9.29 mA without CLM, or 46.1 mA and 14.9 mA with the factor $(1+\lambda|V_{DS}|)$. State which convention is used.

+1: correct shapes and thresholds with one numerical slip, or correct endpoint values with only a verbal shape description instead of the required curves.

0: only one device is correct, or correct shapes with no numerical values.

-2 (asserted as fact): conducting devices treated as in triode, linear curves, wrong threshold magnitudes, PFET current magnitude exceeding NFET current, or formula errors such as a missing $1/2$, NMOS mobility used for PFET, or CLM applied as a divisor.
