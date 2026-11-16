# Golden Solution - A079

## Reference answer

$W_2 = W_1\left[2 + \dfrac{L_2C_{ox}(5 - V_S - V_T)}{CGDO\,(V_S + V_T)}\right]^{-1}$, with $V_S = 2$ V and $V_T \approx 1.02$ V: $W_2 \approx 0.127\,W_1$ for $L_2 = 0.8\ \mu$m ($\approx 0.107\,W_1$ for $L_2 = 1\ \mu$m). Use the minimum allowed $L_2$.

- Let $V_X = V_S + V_T$ with $V_T(V_{SB} = 2\ \mathrm{V}) = 0.7 + 0.4(\sqrt{2.7} - \sqrt{0.7}) = 1.023$ V, so $V_X = 3.02$ V.
- M1 turns off when $\phi_1$ reaches $V_X$, i.e. when $\bar\phi_1 = 5 - V_X = 1.98$ V. From then on, $\phi_1$ falls from $V_X$ to 0 and couples $-W_1\,CGDO\,V_X$ onto $C_1$ through M1's overlap capacitance (its channel charge has already returned to the source).
- M2 is off until $\bar\phi_1 = V_X$ (its terminals are at 2 V). Between $\bar\phi_1 = 1.98$ V and $V_X$ it couples through both overlaps: $2W_2\,CGDO\,(2V_X - 5)$. Above $V_X$ it is on and draws channel charge and overlap charge from the node: $W_2(L_2C_{ox} + 2\,CGDO)(5 - V_X)$. Total delivered by M2: $W_2[2\,CGDO\,V_X + L_2C_{ox}(5 - V_X)]$, of opposite sign to M1's.
- Cancellation: $W_2[2\,CGDO\,V_X + L_2C_{ox}(5 - V_X)] = W_1\,CGDO\,V_X$, giving the result above. Numbers for $L_2 = 0.8\ \mu$m: $CGDO\,V_X = 6.65\times10^{-10}$ F/m, $L_2C_{ox}(5 - V_X) = 3.91\times10^{-9}$ F/m, $W_2/W_1 = 6.65/(13.3 + 39.1) = 0.127$.
- The dummy is much smaller than the usual half-size dummy because, in the slow regime, M1's channel charge does not reach $C_1$; only its overlap feedthrough has to be cancelled, and M2's channel charge (from a small width) does most of the cancelling. The scheme works as derived because $V_X > 2.5$ V (M1 is off before M2 turns on).

## Grading notes

+2: an expression equivalent to $W_2/W_1 = CGDO\,V_X/[2\,CGDO\,V_X + L_2C_{ox}(5 - V_X)]$ with $V_X = V_S + V_T$, and $W_2 \approx 0.12$–$0.13\,W_1$ for $L_2 = 0.8\ \mu$m, with the charge balance explained. +1: correct balance but body effect neglected ($V_T$ = 0.7 V, giving ≈ 0.10 $W_1$), or M2's overlap coupling counted over the full 0–5 V swing (giving ≈ 0.11 $W_1$) with otherwise sound reasoning. 0: correct qualitative idea (dummy charge cancels M1's overlap feedthrough) with the expression left incomplete, a computational slip in an otherwise correct balance, or a wrong expression that the answer itself presents as tentative. −2 (asserted as fact): $W_2 = W_1/2$ (or $W_2 = W_1$) from a fast-regime half-channel-charge argument presented as the design for this slow-clock case, M1's full channel charge assumed to land on $C_1$, M2 treated as a series switch, or a wrong turn-off condition (e.g. M1 taken to turn off at $\phi_1 = V_T$ instead of $V_S + V_T$, ignoring the 2-V source, giving ≈ 0.09 $W_1$) used to derive the final expression.
