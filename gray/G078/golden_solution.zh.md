$A_{dm} = -10$，$A_{cm} \approx -5.0\times10^{-3}$，$A_{cm-dm} \approx -1.0\times10^{-4}$，$A_{dm-cm} = -0.05$。

取 $\bar R = (R_1+R_2)/2 = 10$ kΩ，$\Delta R = R_1 - R_2 = 0.2$ kΩ，$g_m = 1$ mA/V（由于只有负载不同，此处结果是精确的）：
- 差模输入：由于两晶体管对称，尾节点不动，$i_{d1} = -i_{d2} = g_m v_{id}/2$。$v_{od} = -\frac{g_m v_{id}}{2}(R_1 + R_2)$ → $A_{dm} = -g_m\bar R = -10$。$v_{oc} = \frac{1}{2}\left(-\frac{g_m v_{id}}{2}R_1 + \frac{g_m v_{id}}{2}R_2\right)$ → $A_{dm-cm} = -g_m\Delta R/4 = -0.05$。
- 共模输入：每个晶体管带有 $2r_{\text{tail}}$ 的源极负反馈：$i_{d1} = i_{d2} = g_m v_{ic}/(1 + 2g_m r_{\text{tail}})$。$A_{cm} = -g_m\bar R/(1 + 2g_m r_{\text{tail}}) = -10/2001 = -5.0\times10^{-3}$；$A_{cm-dm} = -g_m\Delta R/(1 + 2g_m r_{\text{tail}}) = -0.2/2001 = -1.0\times10^{-4}$。
- $A_{cm}$ 和 $A_{cm-dm}$ 随 $r_{\text{tail}}$ 增大而减小，但 $A_{dm-cm}$ 与 $r_{\text{tail}}$ 无关。
