[Fig. 1] is a dc model of a CMOS class AB output stage with common-source output devices: p-channel $M_1$ (source at $V_{DD}$) and n-channel $M_2$ (source at $-V_{SS}$) drive the output $V_o$ (load $R_L$ to ground), and each gate is driven by an error amplifier of gain $A$ that senses $V_o$ and $V_i$; $V_{OSP}$ and $V_{OSN}$ are the input-referred offset voltages of the two error amplifiers. Assume:
- $k_p'(W/L)_1 = k_n'(W/L)_2 = k'(W/L)$ and $-V_{t1} = V_{t2} = V_t$; square-law devices, no channel-length modulation or body effect.
- With $V_i = 0$ and $V_{OSP} = V_{OSN} = 0$, the error amplifiers bias the devices at $-I_{D1} = I_{D2} = I_Q$ and $V_o = 0$, so $V_{gs1} = -V_t - V_{ov}$ and $V_{gs2} = V_t + V_{ov}$ with $V_{ov} = \sqrt{2I_Q/(k'(W/L))}$.
- Each amplifier output changes by $A$ times the change of its differential input: $V_{gs1} = -V_t - V_{ov} + A[V_o - (V_i - V_{OSP})]$ and $V_{gs2} = V_t + V_{ov} + A[V_o - (V_i - V_{OSN})]$.
- Drain currents are defined as flowing into the drains: $I_{d1} = -\tfrac{k'}{2}\tfrac{W}{L}(V_{gs1} + V_t)^2$ and $I_{d2} = \tfrac{k'}{2}\tfrac{W}{L}(V_{gs2} - V_t)^2$ in the active region; $I_o = V_o/R_L$ and $I_o + I_{d1} + I_{d2} = 0$.

Now assume that the input voltage $V_i$ is high enough that $M_1$ operates in the active region but $M_2$ is cut off. Show that $V_o$ is related to $V_i$ by
$$V_o = V_i + \frac{V_{ov}}{A} - V_{OSP} + \frac{1}{k'\frac{W}{L}A^2R_L} - \frac{1}{k'\frac{W}{L}A^2}\sqrt{\frac{1}{R_L^2} + 2k'\frac{W}{L}\frac{A^2}{R_L}\left(V_i + \frac{V_{ov}}{A} - V_{OSP}\right)}.$$
