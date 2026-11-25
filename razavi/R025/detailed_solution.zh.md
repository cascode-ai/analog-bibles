# 详细步骤 - R025

**思路：** 电容已经处于漏极电源电压。

### 漏源电压为零

在 $t=0$ 时两个沟道端子均为 $3\,\mathrm{V}$，因此 $V_{DS}=0$。截止时电流为零；即使形成沟道，$I_D=\beta[(V_{GS}-V_{TH})V_{DS}-V_{DS}^2/2]=0$。由 KCL 得 $C_1\dot V_X=0$，所以 $V_X(t)=3\,\mathrm{V}$、$I_X(t)=0\,\mathrm{A}$。

### 适用范围

由于 $C_1$、$V_b$ 和器件尺寸未给出，图使用无量纲时间 t/τ；漏电和寄生不在理想模型内。

![答案曲线：电压](/q/R025/solution-voltage.zh.svg)

![答案曲线：电流](/q/R025/solution-current.zh.svg)

