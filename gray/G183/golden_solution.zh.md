$$V_{OS} \simeq \Delta V_t + \frac{V_{ov}}{2}\left(\frac{\Delta I_{BIAS}}{I_{BIAS}} - \frac{\Delta(W/L)}{W/L}\right) - V_T\left(\frac{\Delta I_S}{I_S} + \frac{\Delta R}{R}\right)$$
其中 $\Delta V_t = V_{t3} - V_{t4}$，$\Delta I_{BIAS} = I_{BIAS3} - I_{BIAS4}$（$M_3$ 的电流源减去 $M_4$ 的电流源），$\Delta(W/L) = (W/L)_3 - (W/L)_4$，$\Delta I_S = I_{S1} - I_{S2}$，$\Delta R = R_1 - R_2$，分母取平均值。对于相互独立的失配，
$$\sigma_{V_{OS}}^2 = \sigma_{\Delta V_t}^2 + \left(\frac{V_{ov}}{2}\right)^2\left[\sigma^2_{\Delta I_{BIAS}/I_{BIAS}} + \sigma^2_{\Delta(W/L)/(W/L)}\right] + V_T^2\left[\sigma^2_{\Delta I_S/I_S} + \sigma^2_{\Delta R/R}\right].$$

- 从一个栅极经两个跟随器和公共发射极节点到另一个栅极列 KVL：$V_{ID} = (V_{GS3} + V_{BE1}) - (V_{GS4} + V_{BE2})$。
- MOS 跟随器：每个跟随器流过各自的偏置电流，因此 $V_{GS} = V_t + \sqrt{2I_{BIAS}/(k'W/L)}$，且 $\Delta V_{GS} = \Delta V_t + \dfrac{V_{ov}}{2}\left(\dfrac{\Delta I_{BIAS}}{I_{BIAS}} - \dfrac{\Delta(W/L)}{W/L}\right)$。
- 双极型差分对：$V_{OD} = 0$ 要求 $I_{C1}R_1 = I_{C2}R_2$，即 $I_{C1}/I_{C2} = R_2/R_1$。于是 $V_{BE1} - V_{BE2} = V_T\ln\left(\dfrac{I_{C1}}{I_{C2}}\cdot\dfrac{I_{S2}}{I_{S1}}\right) \approx -V_T\left(\dfrac{\Delta R}{R} + \dfrac{\Delta I_S}{I_S}\right)$。
- 跟随器隔离了输入（栅极电流 ≈ 0），而双极型差分对保持了其以 $V_T$ 为尺度的低失调。MOS 阈值失配直接叠加到失调上，因此通常占主导（几 mV），除非 $V_{ov}$ 很大。
