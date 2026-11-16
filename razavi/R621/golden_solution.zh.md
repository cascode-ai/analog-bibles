对带源极负反馈的平方律关系求全微分即可证明。
- 每一侧：$I_D = \tfrac12\mu_nC_{ox}\tfrac WL(V_b - I_DR_S - V_{TH})^2$，即 $V_{GS} = V_b - I_DR_S$ 本身依赖于 $I_D$。
- 对 $\mu_nC_{ox}$、$W/L$、$V_{TH}$、$R_S$ 以及由此引起的 $\Delta I_D$ 求全微分：$\Delta I_D = I_D\dfrac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + I_D\dfrac{\Delta(W/L)}{W/L} + g_m\left(-\Delta V_{TH} - R_S\Delta I_D - I_D\Delta R_S\right)$，其中 $g_m = \mu_nC_{ox}\tfrac WL(V_{GS}-V_{TH}) = 2I_D/(V_{GS}-V_{TH})$。
- 合并 $\Delta I_D$ 项：$\Delta I_D(1 + g_mR_S) = I_D\left[\dfrac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \dfrac{\Delta(W/L)}{W/L}\right] - g_m\Delta V_{TH} - g_mI_D\Delta R_S$。
- 除以 $I_D$，并利用 $g_m/I_D = 2/(V_{GS}-V_{TH})$，即得所要证明的结果。
- 解释：晶体管失配被除以 $1 + g_mR_S$，只有当 $g_mR_S > 1$ 时这一作用才显著；当 $g_mR_S$ 很大时，电阻项 $g_m\Delta R_S/(1+g_mR_S)$ 趋于 $\Delta R_S/R_S$，因此只有当电阻的匹配优于晶体管时，这种方法才有帮助。代价是要占用 $I_DR_S$ 的电压余度（headroom）。（若考虑体效应，反馈项中的 $g_m$ 变为 $g_m + g_{mb}$。）
