若电阻失配（mismatch）很小，源极负反馈（source degeneration）可以改善电流源（current source）之间的匹配。证明在 [图 1] 所示电路中，
$$\frac{\Delta I_D}{I_D} = \frac{1}{1+g_mR_S}\left[\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \frac{\Delta(W/L)}{W/L} - \frac{2\Delta V_{TH}}{V_{GS}-V_{TH}} - g_m\Delta R_S\right],$$
其中 $\Delta R_S$ 表示 $R_{S1}$ 与 $R_{S2}$ 之间的失配，$R_S$ 为它们的标称值，$V_{GS}$ 为每个晶体管的标称栅源电压。注意，要使 $\Delta I_D/I_D$ 明显减小，$R_S$ 必须大于 $1/g_m$。采用平方律（square law）模型，并忽略沟道长度调制（channel-length modulation）和体效应（body effect）。
