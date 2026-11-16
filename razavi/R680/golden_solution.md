# Golden Solution - R680

## Reference answer

$$g_{mb} = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F - V_{BS} + V_{DS}} - \sqrt{2\phi_F - V_{BS}}\right] = \mu C_{ox}\frac{W}{L}\,\gamma\left[\sqrt{2\phi_F + V_{DB}} - \sqrt{2\phi_F + V_{SB}}\right].$$
- Derivative: $\partial/\partial V_{BS}$ of $-\tfrac23\gamma[(V_{DS}-V_{BS}+2\phi_F)^{3/2} - (2\phi_F - V_{BS})^{3/2}]$ is $\gamma[(V_{DS}-V_{BS}+2\phi_F)^{1/2} - (2\phi_F-V_{BS})^{1/2}] > 0$.

Comparison with the simple model:
- Simple model, triode: $I_D = \mu C_{ox}(W/L)[(V_{GS}-V_{TH})V_{DS} - V_{DS}^2/2]$ gives $g_{mb} = \mu C_{ox}\dfrac{W}{L}V_{DS}\,\dfrac{\gamma}{2\sqrt{2\phi_F+V_{SB}}}$.
- Simple model, saturation: $g_{mb} = \eta g_m$, with $\eta = \gamma/(2\sqrt{2\phi_F+V_{SB}})$ and $g_m = \mu C_{ox}(W/L)(V_{GS}-V_{TH})$.
- The new result can be written $\mu C_{ox}(W/L)\int_{V_{SB}}^{V_{SB}+V_{DS}} \dfrac{\gamma\,du}{2\sqrt{2\phi_F+u}}$. It averages the local body-effect coefficient along the channel, from the source end to the drain end. The simple model uses the source-end value $\gamma/(2\sqrt{2\phi_F+V_{SB}})$ for the whole channel.
- Small $V_{DS}$ ($V_{DS} \ll 2\phi_F + V_{SB}$): a first-order expansion of the square roots reproduces the simple-model result exactly.
- Larger $V_{DS}$: the square root is concave, so the new $g_{mb}$ is smaller. The channel-to-bulk voltage rises toward the drain, where the threshold is less sensitive to $V_{BS}$. The ratio $g_{mb}/g_m$ (here $g_m = \mu C_{ox}(W/L)V_{DS}$) equals $\gamma[\sqrt{2\phi_F+V_{SB}+V_{DS}} - \sqrt{2\phi_F+V_{SB}}]/V_{DS}$, which is at most η.
- Example, $2\phi_F$ = 0.9 V: with $V_{SB} = 0$, $V_{DS}$ = 0.2, 0.5, 1 V give 0.95, 0.89, 0.82 of the simple-model value; with $V_{SB}$ = 1 V, 0.975, 0.94, 0.89.
- In saturation, evaluate the result at $V_{DS} = V_{D,sat}$; because $\partial I_D/\partial V_{DS} = 0$ there, the dependence of $V_{D,sat}$ on $V_{BS}$ does not contribute. The result is again somewhat below $\eta g_m$, approaching it when $V_{D,sat} \ll 2\phi_F + V_{SB}$.

## Grading notes

- +2: correct expression (any equivalent, positive form), plus the comparison: it equals the simple-model result ($\mu C_{ox}(W/L)V_{DS}\gamma/(2\sqrt{2\phi_F+V_{SB}})$, or $\eta g_m$) for small $V_{DS}$ (or small $V_{D,sat}$), and is smaller for larger $V_{DS}$ because the body-effect sensitivity is averaged along the channel instead of taken at the source. Treating saturation via $V_{D,sat}$ is a plus.
- +1: correct expression with a comparison that is correct but purely qualitative or covers one regime only.
- 0: a derivative with a factor slip but a sound comparison, or the correct expression with no comparison.
- -2 (asserted as fact): a negative $g_{mb}$ or a wrong square-root combination; this model claimed to give a larger $g_{mb}$ than the simple model; or the two claimed identical for all $V_{DS}$.
