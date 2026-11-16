# Golden Solution - G183

## Reference answer

$$V_{OS} \simeq \Delta V_t + \frac{V_{ov}}{2}\left(\frac{\Delta I_{BIAS}}{I_{BIAS}} - \frac{\Delta(W/L)}{W/L}\right) - V_T\left(\frac{\Delta I_S}{I_S} + \frac{\Delta R}{R}\right)$$
with $\Delta V_t = V_{t3} - V_{t4}$, $\Delta I_{BIAS} = I_{BIAS3} - I_{BIAS4}$ (current source of $M_3$ minus that of $M_4$), $\Delta(W/L) = (W/L)_3 - (W/L)_4$, $\Delta I_S = I_{S1} - I_{S2}$, $\Delta R = R_1 - R_2$, and average values in the denominators. For independent mismatches,
$$\sigma_{V_{OS}}^2 = \sigma_{\Delta V_t}^2 + \left(\frac{V_{ov}}{2}\right)^2\left[\sigma^2_{\Delta I_{BIAS}/I_{BIAS}} + \sigma^2_{\Delta(W/L)/(W/L)}\right] + V_T^2\left[\sigma^2_{\Delta I_S/I_S} + \sigma^2_{\Delta R/R}\right].$$

- KVL from gate to gate through the followers and the common emitter node: $V_{ID} = (V_{GS3} + V_{BE1}) - (V_{GS4} + V_{BE2})$.
- MOS followers: each carries its own bias current, so $V_{GS} = V_t + \sqrt{2I_{BIAS}/(k'W/L)}$ and $\Delta V_{GS} = \Delta V_t + \dfrac{V_{ov}}{2}\left(\dfrac{\Delta I_{BIAS}}{I_{BIAS}} - \dfrac{\Delta(W/L)}{W/L}\right)$.
- Bipolar pair: $V_{OD} = 0$ requires $I_{C1}R_1 = I_{C2}R_2$, i.e. $I_{C1}/I_{C2} = R_2/R_1$. Then $V_{BE1} - V_{BE2} = V_T\ln\left(\dfrac{I_{C1}}{I_{C2}}\cdot\dfrac{I_{S2}}{I_{S1}}\right) \approx -V_T\left(\dfrac{\Delta R}{R} + \dfrac{\Delta I_S}{I_S}\right)$.
- The followers isolate the inputs (gate current ≈ 0), and the bipolar pair keeps its low $V_T$-scaled offset. The MOS threshold mismatch adds directly, so it usually dominates (a few mV), unless $V_{ov}$ is large.

## Grading notes

+2: all five contributions with correct weights ($1$ for $\Delta V_t$, $V_{ov}/2$ for the current and $W/L$ ratios with opposite signs, $V_T$ for $\Delta I_S/I_S$ and $\Delta R/R$) and the root-sum-square standard deviation; any consistent sign convention accepted. +1: all terms with correct weights but signs inconsistent or the σ expression missing. 0: MOS terms correct but bipolar terms wrong (or vice versa) by a factor such as using $V_{ov}$ instead of $V_{ov}/2$. -2 (asserted as fact): bias-current mismatch claimed to have no effect, bipolar terms scaled by $V_{ov}$, $\Delta V_t$ divided by a gain, or the load-resistor mismatch omitted while claiming the result is complete.
