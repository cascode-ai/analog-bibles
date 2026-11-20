# Golden Solution - R001

## Reference answer

With source and bulk tied, $V_{SB}=0$ and there is no body-effect threshold shift. In saturation, the drain-current magnitude is

$$
|I_D|=\frac12\mu C_{ox}\frac WL
\left(|V_{GS}|-|V_{TH}|\right)^2\left(1+\lambda|V_{DS}|\right),
\qquad |V_{GS}|>|V_{TH}|.
$$

Use each device's mobility coefficient, threshold magnitude and CLM parameter; below threshold the square-law current is zero. Saturation requires $|V_{DS}|\ge |V_{GS}|-|V_{TH}|$ wherever conducting.

Substituting the given parameters gives

$$I_{D,n}=(6.70\ \mathrm{mA/V^2})(|V_{GS}|-0.7\ \mathrm V)^2(1.3),\quad |V_{GS}|>0.7\ \mathrm V,$$
$$|I_{D,p}|=(1.92\ \mathrm{mA/V^2})(|V_{GS}|-0.8\ \mathrm V)^2(1.6),\quad |V_{GS}|>0.8\ \mathrm V.$$

The maximum overdrives, 2.3 V and 2.2 V, are both below 3 V, so both devices remain saturated wherever conducting. Each curve starts at its threshold with zero slope and rises parabolically.

| At $|V_{GS}|=3$ V | NFET current (mA) | PFET current magnitude (mA) |
|---|---|---|
| With CLM (primary result) | $6.70(2.3)^2(1.3)=46.1$ | $1.92(2.2)^2(1.6)=14.9$ |
| Without CLM (comparison) | $6.70(2.3)^2=35.4$ | $1.92(2.2)^2=9.29$ |

The NFET/PFET endpoint magnitude ratio is 3.10 with CLM and 3.81 without it. The no-CLM curves omit the factors 1.3 and 1.6.

![Drain-current magnitudes with and without CLM; thresholds and endpoints](/q/R001/solution-curves.svg)

## Grading notes


+2: actual curves start at the correct gate-voltage magnitudes ($|V_{GS}|=0.7$ V for NFET and 0.8 V for PFET), rise parabolically and remain saturated wherever conducting. Endpoint current magnitudes at $|V_{GS}|=3$ V are within ±5% of either consistent convention: 35.4 mA and 9.29 mA without CLM, or 46.1 mA and 14.9 mA with the factor $(1+\lambda|V_{DS}|)$. State which convention is used.

+1: correct shapes and thresholds with one numerical slip, or correct endpoint values with only a verbal shape description instead of the required curves.

0: only one device is correct, or correct shapes with no numerical values.

-2 (asserted as fact): conducting devices treated as in triode, linear curves, wrong threshold magnitudes, PFET current magnitude exceeding NFET current, or formula errors such as a missing $1/2$, NMOS mobility used for PFET, or CLM applied as a divisor.
