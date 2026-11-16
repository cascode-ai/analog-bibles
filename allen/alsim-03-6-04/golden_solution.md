# Golden Solution - alsim-03-6-04

## Reference answer

Use a nested dc sweep:
```
NMOS output characteristics
M1 2 1 0 0 MN W=1U L=1U
VDS 2 0 DC 0
VGS 1 0 DC 0
.MODEL MN NMOS LEVEL=1 VTO=1 KP=110U LAMBDA=0.04
.DC VDS 0 5 0.1 VGS 1 5 1
.PRINT DC I(VDS)
.END
```
The inner sweep is $v_{DS}$ and the outer one steps $v_{GS}$, so all five curves come out of one run and are plotted together ($i_D = -I(\mathrm{VDS})$).

Expected curves (W/L = 1, level-1 model, λ applied in both regions):
- $v_{GS}$ = 1 V: $i_D$ = 0 (at threshold).
- Saturation beyond $v_{DS} = v_{GS} - 1$ V = 1, 2, 3, 4 V: $i_D = 55\ \mu\mathrm{A/V^2}(v_{GS} - 1)^2(1 + 0.04v_{DS})$, i.e. 55, 220, 495, 880 µA × (1 + 0.04$v_{DS}$): 66, 264, 594 and 1056 µA at $v_{DS}$ = 5 V.
- Below the knees, nonsaturation parabolas from the origin with initial slopes $K'(v_{GS} - 1)$ = 110, 220, 330, 440 µA/V; e.g. 57, 172, 286, 400 µA at $v_{DS}$ = 1 V for $v_{GS}$ = 2, 3, 4, 5 V.

## Grading notes

A correct answer uses a nested (two-variable) dc sweep or an equivalent parametric sweep, and its curves show zero current for $v_{GS}$ = 1 V, knees at $v_{DS}$ ≈ 1, 2, 3, 4 V, and currents at $v_{DS}$ = 5 V of ≈ 66, 264, 594 and 1056 µA per unit W/L (±3%), rising slightly in saturation (slope λ$I_D$). Results for another stated W/L are fine if they scale accordingly. Separate runs for each $v_{GS}$ without a nested sweep miss the "simultaneously" part (minor). Knees at $v_{DS} = v_{GS}$, or currents scaled with $K'$ instead of $K'/2$ in saturation, are wrong.
